import React from 'react';
import { t } from 'react-i18nify';

import translations from '../../../../../data/translations';
import DialogTitle from '../DialogFormElements/DialogTitle';
import InputError from '../../../../Forms/InputError/InputError';
import DialogInputCheckboxWithIcons from '../DialogFormElements/DialogInputCheckboxWithIcons';
import { Industry } from '../../../../../data/enums';

const askAboutIndustry = (props) => (
    <div>
        <DialogTitle step={props.step} />
        <DialogInputCheckboxWithIcons
            name="industry"
            onChange={props.onChange}
            defaultValue={props.dialogData.industry}
            keys={Industry}
            register={props.register} />
        <InputError
            errorField={props.errors.industry}
            message={t("questionaire.errors.oneCheck")}
            style="questionaire" />
    </div>
)

export default askAboutIndustry;