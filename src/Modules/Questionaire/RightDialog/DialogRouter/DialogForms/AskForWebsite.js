import React from 'react';

import translations from '../../../../../data/translations';
import DialogTitle from '../DialogFormElements/DialogTitle';
import InputError from '../../../../Forms/InputError/InputError';
import DialogInputRadio from '../DialogFormElements/DialogInputRadio';

const askAboutServices = (props) => (
    <div>
        <DialogTitle step={props.step} />
        <DialogInputRadio
            name="website"
            saveDataOnEvent={props.saveDataOnEvent}
            defaultValue={props.dialogData.website}
            keys={translations.en.questionaire.website}
            register={props.register} />
        <InputError style="questionaire" />{/* does nothing yet, styling purpose (placeholder) */}
    </div>
)

export default askAboutServices;