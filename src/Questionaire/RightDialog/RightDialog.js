import React from 'react';

import { RightDialogSchemas } from '../dialogSchemas/RightDialogSchemas'
import classesCSS from './RightDialog.module.css';
import Form from '../../Layout/Form/Form';

const rightDialog = (props) => {



    return (
        <div className = {classesCSS.Survey} >
            <h4 className = {classesCSS.Title} >
                {RightDialogSchemas[props.step]?.preTitle || 'No pretitle for that step :('}
            </h4>
            <h2 className = {classesCSS.Title}>
                {RightDialogSchemas[props.step]?.title || 'No title for that step :('}
            </h2>
            <Form
                key = {props.step}
                submit = {props.submit}
                input = {RightDialogSchemas[props.step]?.input || null}
                message = {RightDialogSchemas[props.step]?.comment || ''}
            />
            <p className = {classesCSS.Encrypted} >SSL encrypted</p>
        </div>
    )
}

export default rightDialog;