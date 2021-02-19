import React from 'react';
import { I18n, translate, Translate } from 'react-i18nify';

import translations from '../../../data/translations';
import { Steps, TeamSize } from '../../../data/enums';
import classesCSS from '../RightDialog.module.css';

const DialogForms = (props) => {

    switch (props.step) {
        //-------------------------------- Asking for name --------------------------------
        case Steps.AskForName:
            return <React.Fragment>
                <h4 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskForName+".pretitle"} />
                </h4>
                <h2 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskForName+".title"} />
                </h2>
                <I18n render= {() =>  
                    <input 
                        type = "text"
                        className = {classesCSS.Input}
                        name = "name"
                        placeholder = {translate("rightDialog.placeholders.name")}
                        ref={props.register}
                    />
                }/>
                {/* errors */}
                <I18n render= {() => 
                    <p className = {classesCSS.Error} > {props.errors.name && translate("rightDialog.errors.noName")}</p>
                } />
                <p>
                    <Translate value = {"rightDialog."+Steps.AskForName+".message"} />
                </p>
            </React.Fragment>
        //-------------------------------- Asking what is needed --------------------------------
        case Steps.AskAboutServices:
            return <div>
                <h4 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskAboutServices+".pretitle"} />
                </h4>
                <h2 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskAboutServices+".title"} />
                </h2>
                { Object.keys(translations.en.rightDialog.servicesNeeded).map( (key, index) => {
                    return <React.Fragment key = {key} >
                            <input 
                                type = "checkbox"
                                name = "servicesNeeded"
                                value = {key}
                                ref={props.register}
                            />
                            <label htmlFor = {key}>
                                <I18n render={() => translate("rightDialog.servicesNeeded."+key)} />
                            </label><br/>  
                        </React.Fragment>
                }) }
                <I18n render= {() => 
                    <p className = {classesCSS.Error} > {props.errors.servicesNeeded && translate("rightDialog.errors.oneCheck")}</p>
                } />
            </div>
        //-------------------------------- Asking about website --------------------------------
        case Steps.AskForWebsite:
            return <div>
                <h4 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskForWebsite+".pretitle"} />
                </h4>
                <h2 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskForWebsite+".title"} />
                </h2>
                { Object.keys(translations.en.rightDialog.haveWebsite).map( (key, index) => {
                    return <React.Fragment key = {key} >
                            <input
                                defaultChecked = {index == 0 ? true : false}
                                type = "radio"
                                name = "website"
                                id = {key}
                                value = {key}
                                ref={props.register}
                            />
                            <label htmlFor = {key}>
                                <I18n render={() => translate("rightDialog.haveWebsite."+key)} />
                            </label><br/>
                        </React.Fragment>
                })}
            </div>
        //-------------------------------- Asking about team size --------------------------------
        case Steps.AskAboutTeamSize:
            return <React.Fragment>
                <h4 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskAboutTeamSize+".pretitle"} />
                </h4>
                <h2 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskAboutTeamSize+".title"} />
                </h2>
                <input className = {classesCSS.Range}
                    type = "range"
                    name = "teamSize"
                    id = "teamSize"
                    min = "0"
                    max = "4"
                    ref={props.register()}
                />
                <div className = {classesCSS.RangeLabel} >
                    {TeamSize.map( (item, index) => {
                        return (<span key = {index}>{item}</span>)
                    })}
                </div>
                <p>
                    <Translate value = {"rightDialog."+Steps.AskAboutTeamSize+".message"} />
                </p>
            </React.Fragment>
        //-------------------------------- Asking about offer --------------------------------
        case Steps.AskAboutOffer:
            return <div>
                <h4 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskAboutOffer+".pretitle"} />
                </h4>
                <h2 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskAboutOffer+".title"} />
                </h2>
                { Object.keys(translations.en.rightDialog.offer).map( (key) => {
                    return <React.Fragment key = {key} >
                            <input 
                                type = "checkbox"
                                name = "offer"
                                value = {key}
                                ref={props.register}
                            />
                            <label htmlFor = {key}>
                                <I18n render={() => translate("rightDialog.offer."+key)} />
                            </label><br/>
                        </React.Fragment>
                })}
                <I18n render= {() => 
                    <p className = {classesCSS.Error} > {props.errors.offer && translate("rightDialog.errors.oneCheck")}</p>
                } />
            </div>
        //-------------------------------- Asking for contact --------------------------------
        case Steps.AskForContact:
            return <React.Fragment>
                <h4 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskForContact+".pretitle"} />
                </h4>
                <h2 className = {classesCSS.Title} >
                    <Translate value = {"rightDialog."+Steps.AskForContact+".title"} />
                </h2>
                <I18n render= {() => 
                    <input 
                        type = 'email'
                        className = {classesCSS.Input}
                        name = "email"
                        placeholder = {translate("rightDialog.placeholders.email")}
                        ref={props.register}
                    /> } />
                {/* errors */}
                <I18n render= {() => 
                    <p className = {classesCSS.Error} > {props.errors.email && translate("rightDialog.errors.noEmail")}</p>
                }/>
                <I18n render= {() =>                        
                    <input 
                        type = 'text'
                        className = {classesCSS.Input}
                        name = "phone"
                        placeholder = {translate("rightDialog.placeholders.phone")}
                        ref={props.register}
                    /> } />
            </React.Fragment>
        //-------------------------------- All done --------------------------------
        default:
            return <p><Translate value = "rightDialog.seeYou" /></p>
    }
}

export default DialogForms;