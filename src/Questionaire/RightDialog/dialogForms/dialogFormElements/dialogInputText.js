import React from 'react'
import { I18n } from 'react-i18nify';

import classesCSS from './DialogFormElements.module.css';

const dialogInputText = (props) => {
    return (
        <I18n render= {() =>  
            <input 
                type = "text"
                className = {classesCSS.Input}
                name = {props.name}
                placeholder = {props.placeholder}
                ref={props.register}
            />
        }/>
    )
}

export default dialogInputText;