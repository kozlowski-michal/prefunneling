import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './dialogFormElements.module.css';

const dialogError = (props) => {
    return (
        <I18n render = {() => 
            <p className = {classesCSS.Error} > {props.errorField && translate("rightDialog.errors."+props.errorType)}</p>
        } />
    )
}

export default dialogError;