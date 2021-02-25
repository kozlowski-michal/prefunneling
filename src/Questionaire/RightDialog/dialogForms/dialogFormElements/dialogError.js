import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './DialogFormElements.module.css';

const dialogError = (props) => {
    return (
        <I18n render = {() => 
            <div className = {classesCSS.ErrorContainer} > {props.errorField && translate("rightDialog.errors."+props.errorType)}</div>
        } />
    )
}

export default dialogError;