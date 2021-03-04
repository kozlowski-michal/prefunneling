import React from 'react';
import { I18n, t } from 'react-i18nify';

import translations from '../../../../../data/translations';
import DialogTitle from '../DialogFormElements/DialogTitle';
import InputError from '../../../../Forms/InputError/InputError';
import DialogInputCheckboxWithIcons from '../DialogFormElements/DialogInputCheckboxWithIcons';

const askAboutOffer = (props) => (
    <I18n render={() =>
        <div>
            <DialogTitle step={props.step} />
            <DialogInputCheckboxWithIcons
                name="offer"
                saveDataOnEvent={props.saveDataOnEvent}
                defaultValue={props.dialogData.offer}
                keys={translations.en.questionaire.offer}
                register={props.register} />
            <InputError
                errorField={props.errors.offer}
                message={t("questionaire.errors.oneCheck")}
                style="questionaire" />
        </div>}
    />
)

export default askAboutOffer;