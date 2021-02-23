import React from 'react';
import { translate, Translate } from 'react-i18nify';

import translations from '../../../data/translations';
import DialogTitle from './DialogFormElements/DialogTitle';
import DialogError from './DialogFormElements/DialogError';
import DialogMessage from './DialogFormElements/DialogMessage';
import DialogInputText from './DialogFormElements/DialogInputText';
import DialogInputEmail from './DialogFormElements/DialogInputEmail';
import DialogInputCheckbox from './DialogFormElements/DialogInputCheckbox';
import DialogInputRadio from './DialogFormElements/DialogInputRadio';
import DialogInputRange from './DialogFormElements/DialogInputRange';
import { Steps, TeamSize } from '../../../data/enums';

const DialogForms = (props) => {
    switch (props.step) {
        case Steps.AskForName:
            return <React.Fragment>
                <DialogTitle step = {props.step} />
                <DialogInputText 
                    name = "name" 
                    placeholder = {translate("rightDialog.placeholders.name")}
                    register={props.register} />
                <DialogError 
                    errorField = {props.errors.name}
                    errorType = "noName" />
                <DialogMessage
                    step = {props.step} />
            </React.Fragment>

        case Steps.AskAboutServices:
            return <div>
                <DialogTitle step = {props.step} />
                <DialogInputCheckbox 
                    name = "servicesNeeded"
                    keys = {translations.en.rightDialog.servicesNeeded} 
                    register={props.register} />
                <DialogError 
                    errorField = {props.errors.servicesNeeded}
                    errorType = "oneCheck" />
            </div>

        case Steps.AskForWebsite:
            return <div>
                <DialogTitle step = {props.step} />
                <DialogInputRadio 
                    name = "website"
                    keys = {translations.en.rightDialog.haveWebsite} 
                    register={props.register} />
            </div>

        case Steps.AskAboutTeamSize:
            return <React.Fragment>
                <DialogTitle step = {props.step} />
                <DialogInputRange 
                    name = "teamSize" 
                    labels = {TeamSize}
                    range = "4"
                    register = {props.register}
                    />
                <DialogMessage
                    step = {props.step} />
            </React.Fragment>

        case Steps.AskAboutOffer:
            return <div>
                <DialogTitle step = {props.step} />
                <DialogInputCheckbox 
                    name = "offer"
                    keys = {translations.en.rightDialog.offer} 
                    register={props.register} />
                <DialogError 
                    errorField = {props.errors.offer}
                    errorType = "oneCheck" />
            </div>

        case Steps.AskForContact:
            return <React.Fragment>
                <DialogTitle step = {props.step} />
                <DialogInputEmail
                    name = "email" 
                    placeholder = {translate("rightDialog.placeholders.email")}
                    register={props.register} />                   
                <DialogError 
                    errorField = {props.errors.email}
                    errorType = "noEmail" />
                <DialogInputText 
                    name = "phone" 
                    placeholder = {translate("rightDialog.placeholders.phone")}
                    register={props.register} />
            </React.Fragment>

        /* All done */
        default:
            return <p><Translate value = "rightDialog.seeYou" /></p>
    }
}

export default DialogForms;