import React from 'react';
import { t } from 'react-i18nify';

import DialogTitle from '../DialogFormElements/DialogTitle';
import InputText from '../../../../Forms/InputText/InputText';
import InputError from '../../../../Forms/InputError/InputError';

const askForContact = (props) => {
    return (
        <React.Fragment>
            <DialogTitle step={props.step} />
            <InputText
                name="email"
                placeholder={t("questionaire.placeholders.email")}
                defaultValue={props.dialogData.email}
                onKeyUp={props.onChange}
                style="questionaire"
                register={props.register} />
            <div style={{ width: "100%", height: "20px" }}></div>
            <InputText
                name="phone"
                placeholder={t("questionaire.placeholders.phone")}
                defaultValue={props.dialogData.phone}
                onKeyUp={props.onChange}
                style="questionaire"
                register={props.register} />
            <InputError
                errorField={props.errors.email}
                message={t("questionaire.errors.noEmail")}
                style="questionaire" />
        </React.Fragment>
    )
}

export default askForContact;