import React from 'react';
import { translate } from 'react-i18nify';

import translations from '../../../data/translations';
import DialogTitle from './DialogFormElements/DialogTitle';
import DialogError from './DialogFormElements/DialogError';
import DialogMessage from './DialogFormElements/DialogMessage';
import DialogInputText from './DialogFormElements/DialogInputText';
import DialogInputEmail from './DialogFormElements/DialogInputEmail';
import DialogInputCheckbox from './DialogFormElements/DialogInputCheckbox';
import DialogInputCheckboxWithIcons from './DialogFormElements/DialogInputCheckboxWithIcons';
import DialogInputRadio from './DialogFormElements/DialogInputRadio';
import DialogInputRange from './DialogFormElements/DialogInputRange';
import DialogDone from './DialogFormElements/DialogDone';
import { Steps, TeamSize } from '../../../data/enums';


const DialogForms = (props) => {
    switch (props.step) {
        case Steps.AskForName:
            return <React.Fragment>
                <DialogTitle step = {props.step} />
                <DialogInputText 
                    name = "name" 
                    placeholder = {translate("rightDialog.placeholders.name")}
                    defaultValue = {props.dialogData.name}
                    register={props.register} />
                <DialogMessage
                    step = {props.step} />
                <DialogError 
                    errorField = {props.errors.name}
                    errorType = "noName" />
            </React.Fragment>

        case Steps.AskAboutServices:
            return <div>
                <DialogTitle step = {props.step} />
                <DialogInputCheckbox 
                    step = {props.step}
                    defaultValue = {props.dialogData.servicesNeeded}
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
                    defaultValue = {props.dialogData.website}
                    keys = {translations.en.rightDialog.haveWebsite} 
                    register={props.register} />
                <DialogError />{/* does nothing, styling purpose */}
            </div>

        case Steps.AskAboutTeamSize:
            return <React.Fragment>
                <DialogTitle step = {props.step} />
                <DialogInputRange 
                    name = "teamSize" 
                    defaultValue = {props.dialogData.teamSize}
                    labels = {TeamSize}
                    range = "4"
                    register = {props.register}
                    />
                <DialogMessage
                    step = {props.step} />
                <DialogError />{/* does nothing, styling purpose */}
            </React.Fragment>

        case Steps.AskAboutOffer:
            return <div>
                <DialogTitle step = {props.step} />
                <DialogInputCheckboxWithIcons 
                    name = "offer"
                    defaultValue = {props.dialogData.offer}
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
                <div style = {{width: "100%", height: "20px"}}></div>                
                <DialogInputText 
                    name = "phone" 
                    placeholder = {translate("rightDialog.placeholders.phone")}
                    register={props.register} />
                <DialogError 
                    errorField = {props.errors.email}
                    errorType = "noEmail" />
            </React.Fragment>

        case Steps.Done:
            return <DialogDone 
                step = {props.step}/>


        default:
            return <p>No text for that step :( (Error) </p>
            
    }
}

export default DialogForms;