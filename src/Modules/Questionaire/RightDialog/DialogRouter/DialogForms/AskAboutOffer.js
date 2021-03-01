import React from 'react';

import translations from '../../../../../data/translations';
import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogError from '../DialogFormElements/DialogError';
import DialogInputCheckboxWithIcons from '../DialogFormElements/DialogInputCheckboxWithIcons';

const askAboutOffer = (props) => (
    <div>
        <DialogTitle step={props.step} />
        <DialogInputCheckboxWithIcons
            name="offer"
            saveDataOnEvent={props.saveDataOnEvent}
            defaultValue={props.dialogData.offer}
            keys={translations.en.rightDialog.offer}
            register={props.register} />
        <DialogError
            errorField={props.errors.offer}
            errorType="oneCheck" />
    </div>
)

export default askAboutOffer;