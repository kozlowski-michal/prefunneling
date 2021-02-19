import React from 'react';
import { useForm } from "react-hook-form";
import { Translate } from 'react-i18nify';
import { Steps } from '../../data/enums';

import DialogForms from './dialogForms/dialogForms';
import yupOptions from './dialogForms/yupOptions';
import classesCSS from './RightDialog.module.css';

const RightDialog = (props) => {
    const { register, handleSubmit, errors } = useForm({ resolver: yupOptions(props.step) });

    return (
        <div className = {classesCSS.Survey} >
            <form 
                onSubmit={handleSubmit(props.submit)}
                className = {classesCSS.FormContainer} 
            >
                {/* ---------- All cases of form ---------- */}
                <DialogForms
                    step = {props.step}
                    errors = {errors}
                    register = {register}
                />
                { props.step != Steps.Done ? 
                    <button 
                        className = {classesCSS.Button}
                        type="submit"
                    >
                        ➔
                    </button> : null
                }
            </form>
            <p className = {classesCSS.Encrypted} >
                <Translate value = "rightDialog.ssl" />
            </p>
        </div>
    )
}

export default RightDialog;