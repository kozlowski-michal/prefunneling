import React from 'react';

import translations from '../../../../../data/translations/questionaireTranslations';
import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogError from '../DialogFormElements/DialogError';
import DialogInputRadio from '../DialogFormElements/DialogInputRadio';

const askAboutServices = (props) => (
    <div>
        <DialogTitle step={props.step} />
        <DialogInputRadio
            name="website"
            saveDataOnEvent={props.saveDataOnEvent}
            defaultValue={props.dialogData.website}
            keys={translations.en.rightDialog.haveWebsite}
            register={props.register} />
        <DialogError />{/* does nothing, styling purpose (placeholder) */}
    </div>
)

export default askAboutServices;