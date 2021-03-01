import React from 'react';
import { translate } from 'react-i18nify';

import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogError from '../DialogFormElements/DialogError';
import DialogInputText from '../DialogFormElements/DialogInputText';

const askForContact = (props) => {
    return (
        <React.Fragment>
            <DialogTitle step={props.step} />
            <DialogInputText
                name="email"
                saveDataOnEvent={props.saveDataOnEvent}
                defaultValue={props.dialogData.email}
                placeholder={"email"}
                register={props.register} />
            <div style={{ width: "100%", height: "20px" }}></div>
            <DialogInputText
                name="phone"
                saveDataOnEvent={props.saveDataOnEvent}
                defaultValue={props.dialogData.phone}
                placeholder={"phone"}
                register={props.register} />
            <DialogError
                errorField={props.errors.email}
                errorType="noEmail" />
        </React.Fragment>
    )
}

export default askForContact;