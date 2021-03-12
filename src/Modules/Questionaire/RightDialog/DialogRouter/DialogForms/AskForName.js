import React from 'react';
import { t } from 'react-i18nify';

import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogMessage from '../DialogFormElements/DialogMessage';
import InputText from '../../../../Forms/InputText/InputText';
import InputError from '../../../../Forms/InputError/InputError';

const askForName = (props) => (
    <React.Fragment>
        <DialogTitle step={props.step} />
        <InputText
            name="name"
            placeholder={t("questionaire.placeholders.name")}
            defaultValue={props.dialogData?.name}
            onKeyUp={props.onChange}
            style="questionaire"
            register={props.register} />
        <DialogMessage
            step={props.step} />
        <InputError
            errorField={props.errors.name}
            message={t("questionaire.errors.noName")}
            style="questionaire" />
    </React.Fragment>
)

export default askForName;