import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './dialogFormElements.module.css';

const dialogInputRadio = (props) => {
    return (
        Object.keys(props.keys).map( (key, index) => {
            return <React.Fragment key = {key} >
                    <input
                        defaultChecked = {index == 0 ? true : false}
                        type = "radio"
                        name = {props.name}
                        id = {key}
                        value = {key}
                        ref={props.register}
                    />
                    <label htmlFor = {key}>
                        <I18n render={() => translate("rightDialog."+props.name+"."+key)} />
                    </label><br/>
                </React.Fragment>
        })
    )
}

export default dialogInputRadio;