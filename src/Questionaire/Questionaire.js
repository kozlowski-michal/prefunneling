import React, { useEffect, useState } from 'react';

import LeftDialog from './LeftDialog/LeftDialog';
import RightDialog from './RightDialog/RightDialog';
import classesCSS from './Questionaire.module.css';
import { collectedData } from '../data/collectedData';
import { getLocale } from 'react-i18nify';

const Questionnaire = () => {
    let [stepCounter, setStepCounter] = useState(0);
    let [dialogData, setDialogData] = useState(collectedData);

    useEffect(() => {
        setDialogData((oldDialogData) => {
            return { ...oldDialogData, language: getLocale() }
        });
        console.log("Step:" + stepCounter);  // <============================================================= DEL
        console.log(dialogData);  // <============================================================= DEL
    }, [stepCounter]);

    const saveData = (formData) => {
        setDialogData((oldDialogData) => {
            if (formData.servicesNeeded) { // deep merging
                formData = { servicesNeeded: { ...oldDialogData.servicesNeeded, ...formData.servicesNeeded } }
            }
            if (formData.offer) { // deep merging
                formData = { offer: { ...oldDialogData.offer, ...formData.offer } }
            }
            formData['language'] = getLocale();
            console.log(formData); // <============================================================= DEL
            return { ...oldDialogData, ...formData };
        });
    }

    const stepChangeHandler = (formData, value) => {
        console.log("formData:");
        saveData(formData);
        setStepCounter(() => stepCounter + value);
    }

    return (
        <div className={classesCSS.Container} >
            <div className={classesCSS.LeftDialog} >
                <LeftDialog
                    step={stepCounter}
                    dialogData={dialogData}
                />
            </div>
            <div className={classesCSS.RightDialog} >
                <RightDialog
                    step={stepCounter}
                    dialogData={dialogData}
                    saveData={(data) => saveData(data)}
                    submit={(data) => stepChangeHandler(data, 1)}
                    goBack={(data) => stepChangeHandler(data, -1)}
                />
            </div>
        </div>
    )
}

export default Questionnaire;