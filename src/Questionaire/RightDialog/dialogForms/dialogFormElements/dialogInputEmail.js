import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './dialogFormElements.module.css';

const dialogInputEmail = (props) => {
    return (
        <I18n render= {() =>  
            <input 
                type = "email"
                className = {classesCSS.Input}
                name = {props.name}
                placeholder = {props.placeholder}
                ref={props.register}
            />
        }/>
    )
}

export default dialogInputEmail;