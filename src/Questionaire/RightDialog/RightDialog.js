import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { I18n, translate, Translate } from 'react-i18nify';

import translations from '../../data/translations';
import { TeamSize } from '../../data/enums';
import classesCSS from './RightDialog.module.css';

const RightDialog = (props) => {
    let yupOption = null;
    let form = null;

    //-------------------------------- setting schemas for validation --------------------------------
    switch (props.step) {
        case 0:
            yupOption = yupResolver(yup.object().shape({  name: yup.string().required()  }));
            break;
        case 5:
            yupOption = yupResolver(yup.object().shape({  email: yup.string().required()  }));
            break;           
        default: 
            yupOption = null;
    }

    const schema = yup.object().shape({  name: yup.string().required()  });
    const { register, handleSubmit, errors } = useForm({ resolver: yupOption });

    //-------------------------------- hardcoded input for every step --------------------------------
    switch (props.step) {
        //-------------------------------- Asking for name --------------------------------
        case 0:
            form = 
                <React.Fragment>
                    <h4 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step0.pretitle" />
                    </h4>
                    <h2 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step0.title" />
                    </h2>
                    <I18n render= {() =>  
                        <input 
                            type = 'text'
                            className = {classesCSS.Input}
                            name = "name"
                            placeholder = {translate("rightDialog.placeholders.name")}
                            ref={register}
                        />
                    }/>
                    <I18n render= {() => 
                        <p className = {classesCSS.Error} > {errors.name && translate("rightDialog.errors.noName")}</p>
                    } />
                    <p>
                        <Translate value = "rightDialog.step0.message" />
                    </p>
                </React.Fragment>
            break;
        //-------------------------------- Asking what is needed --------------------------------
        case 1:
            form = 
                <div>
                    <h4 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step1.pretitle" />
                    </h4>
                    <h2 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step1.title" />
                    </h2>
                    { Object.keys(translations.en.rightDialog.servicesNeeded).map( (key) => {
                        return <React.Fragment key = {key} >
                                <input 
                                    type = 'checkbox'
                                    name = "servicesNeeded"
                                    id = {key}
                                    value = {key}
                                    ref={register}
                                />
                                <label htmlFor = {key}>
                                    <I18n render={() => translate("rightDialog.servicesNeeded."+key)} />
                                </label><br/>
                            </React.Fragment>
                    })}
                </div>
            break;
        //-------------------------------- Asking about website --------------------------------
        case 2:
            form = 
                <div>
                    <h4 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step2.pretitle" />
                    </h4>
                    <h2 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step2.title" />
                    </h2>
                    { Object.keys(translations.en.rightDialog.haveWebsite).map( (key, index) => {
                        return <React.Fragment key = {key} >
                                <input
                                    type = 'radio'
                                    name = "website"
                                    id = {key}
                                    value = {key}
                                    ref={register}
                                />
                                <label htmlFor = {key}>
                                    <I18n render={() => translate("rightDialog.haveWebsite."+key)} />
                                </label><br/>
                            </React.Fragment>
                    })}
                </div>
            break;
        //-------------------------------- Asking about team size --------------------------------
        case 3:
            form = 
                <div>
                    <h4 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step3.pretitle" />
                    </h4>
                    <h2 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step3.title" />
                    </h2>
                    <input className = {classesCSS.Range}
                        type = "range"
                        name = "teamSize"
                        id = "teamSize"
                        min = "0"
                        max = "4"
                        ref={register()}
                    />
                    <div className = {classesCSS.RangeLabel} >
                        {TeamSize.map( (item, index) => {
                            return (<span key = {index}>{item}</span>)
                        })}
                    </div>
                    <p>
                        <Translate value = "rightDialog.step3.message" />
                    </p>
                </div>
            break;
        //-------------------------------- Asking about offer --------------------------------
        case 4:
            form = 
                <div>
                    <h4 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step4.pretitle" />
                    </h4>
                    <h2 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step4.title" />
                    </h2>
                    { Object.keys(translations.en.rightDialog.offer).map( (key) => {
                        return <React.Fragment key = {key} >
                                <input 
                                    type = 'checkbox'
                                    name = "offer"
                                    id = {key}
                                    value = {key}
                                    ref={register}
                                />
                                <label htmlFor = {key}>
                                    <I18n render={() => translate("rightDialog.offer."+key)} />
                                </label><br/>
                            </React.Fragment>
                    })}
                </div>
            break;
        //-------------------------------- Asking for contact --------------------------------
        case 5:
            form = 
                <div>
                    <h4 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step5.pretitle" />
                    </h4>
                    <h2 className = {classesCSS.Title} >
                        <Translate value = "rightDialog.step5.title" />
                    </h2>
                    <I18n render= {() => 
                        <input 
                            type = 'email'
                            className = {classesCSS.Input}
                            name = "email"
                            placeholder = {translate("rightDialog.placeholders.email")}
                            ref={register}
                        /> } />
                     <I18n render= {() =>                        
                        <input 
                            type = 'text'
                            className = {classesCSS.Input}
                            name = "phone"
                            placeholder = {translate("rightDialog.placeholders.phone")}
                            ref={register}
                        />
                    } />
                </div>
            break;
        //-------------------------------- All done --------------------------------
        default:
            form = <p>We will contact with you soon!</p>
    }

    return (
        <div className = {classesCSS.Survey} >
            <form 
                onSubmit={handleSubmit(props.submit)}
                className = {classesCSS.FormContainer} 
            >
                {form}
                { props.step <= 5 ? <button 
                    className = {classesCSS.Button}
                    type="submit"
                >➔</button> : null}
            </form>
            <p className = {classesCSS.Encrypted} >
                <Translate value = "rightDialog.ssl" />
            </p>
        </div>
    )
}

export default RightDialog;