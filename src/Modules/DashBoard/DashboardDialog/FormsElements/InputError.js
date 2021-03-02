import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './FormsElements.module.css';

const dialogError = (props) => {
    return (
        <I18n render={() => props.errorField ?
            <div className={classesCSS.ErrorContainer} >
                {translate("dashboard.errors." + props.errorType)}
            </div> : null
        } />
    )
}

export default dialogError;