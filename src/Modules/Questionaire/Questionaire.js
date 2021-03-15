import React, { useEffect, useState } from 'react';

import RightDialog from './RightDialog/RightDialog';
import { questionaireDataModel } from '../../data/collectedData';
import { getLocale } from 'react-i18nify';
import { dataToLeftDialog } from './data/dataToLeftDialog';

const Questionnaire = (props) => {
    const [stepCounter, setStepCounter] = useState(0);
    const [dialogData, setDialogData] = useState(questionaireDataModel);

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
            if (formData.servicesNeeded) {
                formData = { servicesNeeded: { ...oldDialogData.servicesNeeded, ...formData.servicesNeeded } }
            }
            if (formData.industry) {
                formData = { industry: { ...oldDialogData.industry, ...formData.industry } }
            }
            formData['language'] = getLocale();
            return { ...oldDialogData, ...formData };
        });
    }

    const handleStep = (value) => {
        setStepCounter(() => stepCounter + value);
    }

    return (
        <>
            <RightDialog
                step={stepCounter}
                dialogData={dialogData}
                onChange={(data) => handleChange(data)}
                onSubmit={() => handleStep(1)}
                onBack={() => handleStep(-1)}
            />
        </>
    )
}

export default Questionnaire;