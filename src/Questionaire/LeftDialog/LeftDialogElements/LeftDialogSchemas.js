import React from 'react';
import { translate, Translate } from 'react-i18nify';

import { Steps } from '../../../data/enums';
import classesCSS from './LeftDialogElements.module.css';

const LeftDialogSchemas = (props) => {
    switch (props.step) {
        case Steps.AskForName:
            return <p className = {classesCSS.Title} ><Translate value = {"leftDialog."+Steps.AskForName} /></p>;

        case Steps.AskAboutServices:
            return <p className = {classesCSS.Title} >
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
                    return <p className = {classesCSS.Title} ><Translate value = {"leftDialog."+Steps.AskForWebsite+".caseAll"} /></p>;
                case 2:
                    return <p className = {classesCSS.Title} >
                        {services.join(' and ')}
                        <Translate value = {"leftDialog."+Steps.AskForWebsite+".default"} />
                    </p>;
                case 1:
                    return <p className = {classesCSS.Title} >
                        {services}
                        <Translate value = {"leftDialog."+Steps.AskForWebsite+".default"} /><br />
                    </p>;
                default: 
                    return <p className = {classesCSS.Title}>No choice made (Error) </p>
            }

        case Steps.AskAboutTeamSize:
            return props.dialogData.website === "no" ? 
                <p className = {classesCSS.Title} >
                    <Translate value = {"leftDialog."+Steps.AskAboutTeamSize+".no"} />
                </p> :
                    props.dialogData.website === "soon" ? 
                    <p className = {classesCSS.Title} >
                        <Translate value = {"leftDialog."+Steps.AskAboutTeamSize+".soon"} /> 
                    </p> :
                        props.dialogData.website === "yes" ? 
                        <p className = {classesCSS.Title} >
                            <Translate value = {"leftDialog."+Steps.AskAboutTeamSize+".yes"} /> 
                        </p> : 
                            <span>no choice made (Error) </span>

        case Steps.AskAboutOffer:
        case Steps.AskForContact:
        case Steps.Done:
            return <p className = {classesCSS.Title} ><Translate value = {"leftDialog."+props.step} /></p>;             
        default: 
            return <p className = {classesCSS.Title} >No text for that step :( (Error) </p>
    }
}

export default LeftDialogSchemas;