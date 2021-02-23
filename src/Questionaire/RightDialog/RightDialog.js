import React from 'react';
import { useForm } from "react-hook-form";
import { Translate } from 'react-i18nify';
import { Steps } from '../../data/enums';

import DialogForms from './DialogForms/DialogForms';
import { ArrowNext, ArrowBack } from './ButtonsSVG/ButtonsSVG';
import yupOptions from '../../data/yupOptions';
import classesCSS from './RightDialog.module.css';

const RightDialog = (props) => {
    const { register, handleSubmit, errors } = useForm({ resolver: yupOptions(props.step) });

    return (
        <div className = {classesCSS.Survey} >
            <form onSubmit={handleSubmit(props.submit)} className = {classesCSS.Form} >
                <div className = {classesCSS.FormContainer} >
                    <DialogForms
                        step = {props.step}
                        errors = {errors}
                        register = {register}
                    />
                </div>

                {/* Buttons */}
                { props.step != Steps.Done ? 
                    <div className = {classesCSS.ButtonsContainer} >
                        <div className = {classesCSS.ButtonLine} ></div>
                        <button 
                            className = {classesCSS.ButtonNext}
                            type="submit" >
                            <ArrowNext/>
                        </button>
                        
                        { props.step != 0 ?
                            <button 
                                className = {classesCSS.ButtonBack}
                                onClick = {props.goBack} > 
                                <ArrowBack/>
                            </button> : null 
                        }
                    </div> : null
                }
            </form>
            <p className = {classesCSS.Encrypted} >
                <Translate value = "rightDialog.ssl" />
            </p>
        </div>
    )
}

export default RightDialog;