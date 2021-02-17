import React, { useEffect, useState } from 'react';

import LeftDialog from './LeftDialog/LeftDialog';
import RightDialog from './RightDialog/RightDialog';
import classesCSS from './Questionaire.module.css';
import { TeamSize } from './dialogSchemas/enums';

const Questionnaire = (props) => {
    let [stepCounter, setStepCounter] = useState(0);
    let [dialogData, setDialogData] = useState({});

    useEffect( () => {
        console.log("Step:" + stepCounter);  // <============================================================= DEL
        console.log(dialogData);  // <============================================================= DEL
    }, [stepCounter])

    // passing data from dialog to state
    const onSubmitHandler = (formData) => {
        // for range
        if (formData.teamSize) {
            formData = {teamSize: TeamSize[formData.teamSize]};
        }

        setDialogData( (oldDialogData) => {
            return {...oldDialogData, ...formData};
        });
        setStepCounter( () => stepCounter + 1 );
    }

    return (
        <div className = {classesCSS.Container} >
            <div className = {classesCSS.Conversation} >
                <LeftDialog
                    language = {props.language}
                    step = {stepCounter}
                    dialogData = {dialogData}
                />
            </div>
            <div className = {classesCSS.Survey} >
                <RightDialog 
                    language = {props.language}
                    step = {stepCounter}
                    submit = {(event) => onSubmitHandler(event)}
                />
            </div>
        </div>
    )
}

export default Questionnaire;

/*
            /*<div className = {classesCSS.TestingOutput} >
                <TestingOutput 
                    language = {props.language}
                    step = {stepCounter}
                    data = {dialogData}
                />
            </div>

*/