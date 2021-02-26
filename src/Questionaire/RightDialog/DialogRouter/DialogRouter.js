import React from 'react';

import { Steps } from '../../../data/enums';
import AskForName from './DialogForms/AskForName';
import AskAboutServices from './DialogForms/AskAboutServices';
import AskForWebsite from './DialogForms/AskForWebsite';
import AskAboutTeamSize from './DialogForms/AskAboutTeamSize';
import AskAboutOffer from './DialogForms/AskAboutOffer';
import AskForContact from './DialogForms/AskForContact';
import DialogDone from './DialogFormElements/DialogDone';

const DialogForms = (props) => {
    switch (props.step) {
        case Steps.AskForName:
            return <AskForName {...props} />

        case Steps.AskAboutServices:
            return <AskAboutServices {...props} />

        case Steps.AskForWebsite:
            return <AskForWebsite {...props} />

        case Steps.AskAboutTeamSize:
            return <AskAboutTeamSize {...props} />

        case Steps.AskAboutOffer:
            return <AskAboutOffer {...props} />

        case Steps.AskForContact:
            return <AskForContact {...props} />

        case Steps.Done:
            return <DialogDone step={props.step} />

        default:
            return <p>No text for that step :( (Error) </p>

    }
}

export default DialogForms;