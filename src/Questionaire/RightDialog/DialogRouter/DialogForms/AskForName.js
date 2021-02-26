import React from 'react';
import { translate } from 'react-i18nify';

import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogError from '../DialogFormElements/DialogError';
import DialogMessage from '../DialogFormElements/DialogMessage';
import DialogInputText from '../DialogFormElements/DialogInputText';

const askForName = (props) => (
    <React.Fragment>
        <DialogTitle step={props.step} />
        <DialogInputText
            name="name"
            saveData={props.saveData}
            defaultValue={props.dialogData.name}
            placeholder={translate("rightDialog.placeholders.name")}
            register={props.register} />
        <DialogMessage
            step={props.step} />
        <DialogError
            errorField={props.errors.name}
            errorType="noName" />
    </React.Fragment>
)

export default askForName;