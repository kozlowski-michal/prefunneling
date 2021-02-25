import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './DialogInputCheckbox.module.css';

const dialogInputCheckbox = (props) => {
    return (
        <div className = {classesCSS.Container}>
            <I18n render={() => translate("rightDialog."+props.step+".need")} />
            {Object.keys(props.keys).map( (key) => {
                return <label key = {key} className = {classesCSS.CheckboxContainer}>
                        <input 
                            type = "checkbox"
                            defaultChecked = {props.defaultValue[key]}
                            name = {props.name}
                            id = {key}
                            value = {key}
                            ref={props.register}
                        />
                        <div className = {classesCSS.CheckboxField} ></div>
                        <I18n render={() => translate("rightDialog."+props.name+"."+key)} />
                    </label>  
    })}
        </div>
    )
}

export default dialogInputCheckbox;