import React from 'react';
import { t } from 'react-i18nify';

import translations from '../../../../../data/translations';
import DialogTitle from '../DialogFormElements/DialogTitle';
import InputError from '../../../../Forms/InputError/InputError';
import DialogInputCheckbox from '../DialogFormElements/DialogInputCheckbox';

const askAboutServices = (props) => (
    <div>
        <DialogTitle step={props.step} />
        <DialogInputCheckbox
            step={props.step}
            saveDataOnEvent={props.saveDataOnEvent}
            defaultValue={props.dialogData.servicesNeeded}
            name="servicesNeeded"
            keys={translations.en.questionaire.servicesNeeded}
            register={props.register} />
        <InputError
            errorField={props.errors.servicesNeeded}
            message={t("questionaire.errors.oneCheck")}
            style="questionaire" />
    </div>
)

export default askAboutServices;