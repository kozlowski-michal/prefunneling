import React from 'react';

import translations from '../../../../../data/translations/questionaireTranslations';
import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogError from '../DialogFormElements/DialogError';
import DialogInputCheckbox from '../DialogFormElements/DialogInputCheckbox';

const askAboutServices = (props) => (
    <div>
        <DialogTitle step={props.step} />
        <DialogInputCheckbox
            step={props.step}
            saveDataOnEvent={props.saveDataOnEvent}
            defaultValue={props.dialogData.servicesNeeded}
            name="servicesNeeded"
            keys={translations.en.rightDialog.servicesNeeded}
            register={props.register} />
        <DialogError
            errorField={props.errors.servicesNeeded}
            errorType="oneCheck" />
    </div>
)

export default askAboutServices;