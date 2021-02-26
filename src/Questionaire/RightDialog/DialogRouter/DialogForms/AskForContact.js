import React from 'react';
import { translate } from 'react-i18nify';

import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogError from '../DialogFormElements/DialogError';
import DialogInputText from '../DialogFormElements/DialogInputText';

const askForContact = (props) => (
    <React.Fragment>
        <DialogTitle step={props.step} />
        <DialogInputText
            name="email"
            saveData={props.saveData}
            defaultValue={props.dialogData.email}
            placeholder={translate("rightDialog.placeholders.email")}
            register={props.register} />
        <div style={{ width: "100%", height: "20px" }}></div>
        <DialogInputText
            name="phone"
            saveData={props.saveData}
            defaultValue={props.dialogData.phone}
            placeholder={translate("rightDialog.placeholders.phone")}
            register={props.register} />
        <DialogError
            errorField={props.errors.email}
            errorType="noEmail"
            firstRun={null} />
    </React.Fragment>
)

export default askForContact;