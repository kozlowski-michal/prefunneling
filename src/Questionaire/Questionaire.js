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
    }, [stepCounter, getLocale() ]);

    /* Parsing data from dialog */
    const onSubmitHandler = (formData) => {
        /* for range */
        if (formData.teamSize) {
            formData = {teamSize: TeamSize[formData.teamSize]};
        }
        /* for checkbox: services needed */
        else if (formData.servicesNeeded) {
            let objectData = {...dialogData.servicesNeeded};
            formData.servicesNeeded.map( (item) => {
                objectData[item] = true;
            });
            formData = {servicesNeeded: objectData}
        }
        /* for checkbox: offer */
        else if (formData.offer) {
            let objectData = {...dialogData.offer};
            formData.offer.map( (item) => {
                objectData[item] = true;
            });
            formData = {offer: objectData}
        }
        /* for simple value data */
        setDialogData( (oldDialogData) => {
            return {...oldDialogData, ...formData};
        });

        setStepCounter( () => stepCounter + 1 );
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
                />
            </div>
        </div>
    )
}

export default Questionnaire;