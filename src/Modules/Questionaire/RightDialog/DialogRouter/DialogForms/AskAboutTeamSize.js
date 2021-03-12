import React from 'react';

import DialogTitle from '../DialogFormElements/DialogTitle';
import InputError from '../../../../Forms/InputError/InputError';

import InputRange from '../../../../Forms/InputRange/InputRange';
import DialogMessage from '../DialogFormElements/DialogMessage';
import { TeamSize } from '../../../../../data/enums';

const askAboutTeamSize = (props) => (
    <React.Fragment>
        <DialogTitle step={props.step} />
        <InputRange
            name="teamSize"
            defaultValue={props.dialogData?.teamSize}
            values={TeamSize}
            style="questionaire"
            onChange={props.onChange}
            register={props.register} />
        <DialogMessage
            step={props.step} />
        <InputError style="questionaire" />{/* does nothing yet, styling purpose */}
    </React.Fragment>
)

export default askAboutTeamSize;