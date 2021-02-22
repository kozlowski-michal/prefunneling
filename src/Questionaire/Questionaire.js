import React, { useEffect, useState } from 'react';

import LeftDialog from './LeftDialog/LeftDialog';
import RightDialog from './RightDialog/RightDialog';
import classesCSS from './Questionaire.module.css';
import { collectedData } from '../data/collectedData';
import { TeamSize } from '../data/enums';
import { getLocale } from 'react-i18nify';

const Questionnaire = () => {
    let [stepCounter, setStepCounter] = useState(0);
    let [dialogData, setDialogData] = useState(collectedData);

    useEffect( () => {
        setDialogData( (oldDialogData) => {
            return {...oldDialogData, language: getLocale()}
        });
        console.log("Step:" + stepCounter);  // <============================================================= DEL
        console.log(dialogData);  // <============================================================= DEL
    }, [stepCounter]);

    /* Parsing data from dialog */
    const onSubmitHandler = (formData) => {
        /* for range */
        if (formData.teamSize) {
            formData = {teamSize: TeamSize[formData.teamSize]};
        }
        /* for checkbox: services needed */
        else if (formData.servicesNeeded) {
            let services = {};

            Object.keys(dialogData.servicesNeeded).map( (key) => {
                if (formData.servicesNeeded.includes(key) )
                    services[key] = true;
                else
                    services[key] = false;
            })

            formData = {servicesNeeded: services}
        }
        /* for checkbox: offer */
        else if (formData.offer) {
            let offer = {};

            Object.keys(dialogData.offer).map( (key) => {
                if (formData.offer.includes(key) )
                    offer[key] = true;
                else
                    offer[key] = false;
            })

            formData = {offer: offer}
        }

        /* for simple value data + adding language for case if updated */
        formData['language'] = getLocale();
        setDialogData( (oldDialogData) => {
            return {...oldDialogData, ...formData};
        });

        setStepCounter( () => stepCounter + 1 );
    }

    const previousStepHandler = () => {
        setStepCounter( () => stepCounter - 1 );
    }

    return (
        <div className = {classesCSS.Container} >
            <div className = {classesCSS.Conversation} >
                <LeftDialog
                    step = {stepCounter}
                    dialogData = {dialogData}
                />
            </div>
            <div className = {classesCSS.Survey} >
                <RightDialog 
                    step = {stepCounter}
                    submit = {(event) => onSubmitHandler(event)}
                    goBack = {previousStepHandler}
                />
            </div>
        </div>
    )
}

export default Questionnaire;