import React from 'react';

import { Steps } from '../../data/enums';
import AskForName from './DialogForms/AskForName';
import AskAboutServices from './DialogForms/AskAboutServices';
import AskForWebsite from './DialogForms/AskForWebsite';
import AskAboutTeamSize from './DialogForms/AskAboutTeamSize';
import AskAboutIndustry from './DialogForms/AskAboutIndustry';
import AskForContact from './DialogForms/AskForContact';
import DialogDone from './DialogFormElements/DialogDone';

const DialogForms = (props) => {
    switch (props.step) {
        case Steps.askForName:
            return <AskForName {...props} />

        case Steps.askAboutServices:
            return <AskAboutServices {...props} />

        case Steps.askForWebsite:
            return <AskForWebsite {...props} />

        case Steps.askAboutTeamSize:
            return <AskAboutTeamSize {...props} />

        case Steps.askAboutIndustry:
            return <AskAboutIndustry {...props} />

        case Steps.askForContact:
            return <AskForContact {...props} />

        case Steps.done:
            return <DialogDone step={props.step} />

        default:
            return <p>No text for that step :( (Error) </p>

    }
}

export default DialogForms;