import React from 'react';

import DialogTitle from '../DialogFormElements/DialogTitle';
import InputError from '../../../../Forms/InputError/InputError';

import InputRange from '../../../../Forms/InputRange/InputRange';
import DialogMessage from '../DialogFormElements/DialogMessage';
import { TeamSize } from '../../../../../data/enums';

const askAboutTeamSize = (props) => (
    <>
        <DialogTitle step={props.step} />
        <InputRange
            name="teamSize"
            defaultValue={props.dialogData?.teamSize}
            values={TeamSize}
            onChange={props.onChange}
            register={props.register}
            colorLeft={getComputedStyle(document.documentElement).getPropertyValue('--formAzure')}
            colorRight={getComputedStyle(document.documentElement).getPropertyValue('--formViolet')}
            hoverOffset="2" />
        <DialogMessage
            step={props.step} />
        <InputError style="questionaire" />{/* does nothing yet, styling purpose */}
    </>
)

export default askAboutTeamSize;