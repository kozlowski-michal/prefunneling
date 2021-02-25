import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './DialogInputCheckboxWithIcons.module.css';

const dialogInputCheckbox = (props) => {
    return (
        <div className = {classesCSS.Container}>
            {Object.keys(props.keys).map( (key) => {
                return <label key = {key} className = {classesCSS.CheckboxContainer}>
                        <input 
                            type = "checkbox"
                            onChange = {(event) => props.saveData({offer: {[event.target.value]: event.target.checked}})}
                            defaultChecked = {props.defaultValue[key]}
                            name = {props.name}
                            id = {key}
                            value = {key}
                            ref={props.register}
                        />
                        <div className = {classesCSS.CheckboxField} ></div>
                        <div className = {classesCSS.IconContainer}>                  

                        </div>
                        {<I18n render={() => translate("rightDialog."+props.name+"."+key)} />}
                    </label>  
    })}
        </div>
    )
}

export default dialogInputCheckbox;