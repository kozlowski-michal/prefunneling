import React from 'react';
import { I18n, translate, Translate } from 'react-i18nify';
import { Steps } from '../../../data/enums';

import classesCSS from './leftDialogSummary.module.css';

const leftDialogSummary = (props) => {
    let services = [];
    Object.keys(props.dialogData.servicesNeeded).map( (key) => {
        if (props.dialogData.servicesNeeded[key]) services
            .push( <I18n render={() => translate("rightDialog.servicesNeeded."+key)} /> )
    })

    if (props.step == Steps.AskForName || props.step == Steps.AskAboutServices) 
        return <p>Marco Dzierma</p>

    /* when changing steps this logic could need to be changed as well, to avoid empty data */
    return <ul>
        <Translate value = "leftDialog.selections" />:
        {services.map( (item, index) => {
            return <li key={index} className = {classesCSS.fromCheckbox} >{item}</li>
        })}
        {props.dialogData.website ? 
            <li key="website" className = {classesCSS.fromRadio} >
                Website: <I18n render={() => translate("rightDialog.haveWebsite."+props.dialogData.website )} />
            </li> : null}
    </ul>
 }


export default leftDialogSummary;