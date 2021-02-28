import React from 'react'
import { I18n } from 'react-i18nify';

import classesCSS from './DialogFormElements.module.css';

const dialogInputText = (props) => {
    return (
        <I18n render={() =>
            <input
                name={props.name}
                type="text"
                onKeyUp={(event) => props.saveDataOnEvent({ [props.name]: event.target.value })}
                defaultValue={props.defaultValue}
                className={classesCSS.Input}
                placeholder={props.placeholder}
                ref={props.register}
            />
        } />
    )
}

export default dialogInputText;