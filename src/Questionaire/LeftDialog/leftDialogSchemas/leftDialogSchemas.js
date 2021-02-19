import React from 'react';
import { translate, Translate } from 'react-i18nify';
import { Steps } from '../../../data/enums';

const LeftDialogSchemas = (props) => {
    switch (props.step) {
        case Steps.AskForName:
            return <p><Translate value = {"leftDialog."+Steps.AskForName} /></p>;

        case Steps.AskAboutServices:
            return <p>
                <Translate value = {"leftDialog."+Steps.AskAboutServices+".line1"} name = {props.dialogData.name} /><br/>
                <Translate value = {"leftDialog."+Steps.AskAboutServices+".line2"} />
            </p>;

        case Steps.AskForWebsite:
            let services = [];
            Object.keys(props.dialogData.servicesNeeded).map( (key) => {
                if (props.dialogData.servicesNeeded[key]) 
                    services.push( translate("rightDialog.servicesNeeded."+key) );
            })

            switch (services.length){
                case 3:
                    return <p><Translate value = {"leftDialog."+Steps.AskForWebsite+".caseAll"} /></p>;
                case 2:
                    return <p>
                        {services.join(' and ')}
                        <Translate value = {"leftDialog."+Steps.AskForWebsite+".default"} />
                    </p>;
                case 1:
                    return <p>
                        {services}
                        <Translate value = {"leftDialog."+Steps.AskForWebsite+".default"} /><br />
                    </p>;
                default: 
                    return <p>no choice made</p>
            }

        case Steps.AskAboutTeamSize:
            return props.dialogData.website === "no" ? <Translate value = {"leftDialog."+Steps.AskAboutTeamSize+".no"} /> :
                props.dialogData.website === "soon" ? <Translate value = {"leftDialog."+Steps.AskAboutTeamSize+".soon"} /> :
                    props.dialogData.website === "yes" ? <Translate value = {"leftDialog."+Steps.AskAboutTeamSize+".yes"} /> : 
                        <span>no choice made</span>
        case Steps.AskAboutOffer:
        case Steps.AskForContact:
        case Steps.Done:
            return <p><Translate value = {"leftDialog."+props.step} /></p>;             
        default: 
            return <p>No text for that step :(</p>
    }
}

export default LeftDialogSchemas;