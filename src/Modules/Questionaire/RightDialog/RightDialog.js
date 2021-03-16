import React from 'react';
import { useForm } from "react-hook-form";
import { Translate } from 'react-i18nify';

import DialogRouter from './DialogRouter/DialogRouter';
import DialogNav from './DialogNav/DialogNav';
import validatorOptions from '../data/validatorOptions';
import classesCSS from './RightDialog.module.css';
import { Steps } from '../data/enums';

const RightDialog = ({ onBack, onSubmit, ...props }) => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        resolver: validatorOptions(props.step)
    });

    let classesFormContainer = props.step === Steps.done ? [classesCSS.FormContainer, classesCSS.FormContainerDone].join(" ") : classesCSS.FormContainer;
    let classesForm = props.step === Steps.done ? [classesCSS.Form, classesCSS.FormDone].join(" ") : classesCSS.Form;

    return (
        <div className={classesCSS.Survey} >
            <form onSubmit={handleSubmit(onSubmit)} className={classesForm} >
                <div className={classesFormContainer} >
                    <DialogRouter
                        {...props}
                        errors={errors}
                        register={register}
                    />
                </div>
                <DialogNav
                    step={props.step}
                    onBack={onBack}
                />
            </form>
            { props.step != Steps.done &&
                <p className={classesCSS.Encrypted} >
                    <Translate value="questionaire.ssl" />
                </p>}
        </div>
    )
}

export default RightDialog;