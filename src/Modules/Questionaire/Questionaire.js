import React, { useEffect, useState } from 'react';

import RightDialog from './RightDialog/RightDialog';
import { questionaireDataModel } from '../../data/collectedData';
import { getLocale } from 'react-i18nify';
import { dataToLeftDialog } from './data/dataToLeftDialog';

const Questionnaire = (props) => {
    let [stepCounter, setStepCounter] = useState(0);
    let [dialogData, setDialogData] = useState(questionaireDataModel);

    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog(stepCounter, dialogData));
        setDialogData((oldDialogData) => {
            return { ...oldDialogData, language: getLocale() }
        });
        console.log("Step:" + stepCounter);  // <============================================================= DEL
        console.log(dialogData);  // <============================================================= DEL
    }, [stepCounter]);

    const handleChange = (formData) => {
        setDialogData((oldDialogData) => {
            if (formData.servicesNeeded) { // deep merging
                formData = { servicesNeeded: { ...oldDialogData.servicesNeeded, ...formData.servicesNeeded } }
            }
            if (formData.industry) { // deep merging
                formData = { industry: { ...oldDialogData.industry, ...formData.industry } }
            }
            formData['language'] = getLocale();
            return { ...oldDialogData, ...formData };
        });
    }

    const stepChangeHandler = (value) => {
        setStepCounter(() => stepCounter + value);
    }

    return (
        <React.Fragment>
            <RightDialog
                step={stepCounter}
                dialogData={dialogData}
                onChange={(data) => handleChange(data)}
                submit={() => stepChangeHandler(1)}
                goBack={() => stepChangeHandler(-1)}
            />
        </React.Fragment >
    )
}

export default Questionnaire;