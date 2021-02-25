import React from 'react';

import DialogTitle from '../DialogFormElements/DialogTitle';
import DialogError from '../DialogFormElements/DialogError';
import DialogInputRange from '../DialogFormElements/DialogInputRange';
import DialogMessage from '../DialogFormElements/DialogMessage';
import { TeamSize } from '../../../../data/enums';

const askAboutTeamSize = (props) => (
    <React.Fragment>
        <DialogTitle step = {props.step} />
        <DialogInputRange 
            name = "teamSize" 
            saveData = {props.saveData}
            defaultValue = {props.dialogData.teamSize}
            labels = {TeamSize}
            range = "4"
            register = {props.register}
            />
        <DialogMessage
            step = {props.step} />
        <DialogError />{/* does nothing, styling purpose */}
    </React.Fragment>
)

export default askAboutTeamSize;