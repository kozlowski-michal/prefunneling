import React from 'react';
import { useForm } from "react-hook-form";
import { Translate } from 'react-i18nify';

import DialogRouter from './DialogRouter/DialogRouter';
import DialogNav from './DialogNav/DialogNav';
import validatorOptions from '../../data/validatorOptions';
import classesCSS from './RightDialog.module.css';
import { Steps } from '../../data/enums';

const RightDialog = (props) => {
    const { register, handleSubmit, errors } = useForm({ resolver: validatorOptions(props.step) });

    return (
        <div className = {classesCSS.Survey} >
            <form onSubmit={handleSubmit(props.submit)} className = {classesCSS.Form} >
                <div className = {classesCSS.FormContainer} >
                    <DialogRouter
                        step = {props.step}
                        saveData = {props.saveData}
                        dialogData = {props.dialogData}
                        errors = {errors}
                        register = {register} />
                </div>
                <DialogNav 
                    step = {props.step}
                    submit = {props.submit}
                    goBack = {props.goBack} />
            </form>
            { props.step != Steps.Done ? 
            <p className = {classesCSS.Encrypted} >
                <Translate value = "rightDialog.ssl" />
            </p> : null }
        </div>
    )
}

export default RightDialog;