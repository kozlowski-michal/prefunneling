import React from 'react'
import { I18n, translate } from 'react-i18nify';

const dialogInputCheckbox = (props) => {
    return (
        Object.keys(props.keys).map( (key) => {
            return <React.Fragment key = {key} >
                    <input 
                        type = "checkbox"
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

export default dialogInputCheckbox;