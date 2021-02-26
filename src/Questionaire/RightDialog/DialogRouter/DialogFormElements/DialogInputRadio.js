import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './DialogInputRadio.module.css';

const dialogInputRadio = (props) => {
    let keys = Object.keys(props.keys);
    let defaultIndex = keys.indexOf(props.defaultValue);
    return (
        <div className={classesCSS.Container}>
            {keys.map((key, index) => {
                return <label key={key} className={classesCSS.RadioContainer}>
                    <input
                        defaultChecked={index == defaultIndex ? true : false}
                        onChange={(event) => props.saveData({ website: event.target.value })}
                        type="radio"
                        name={props.name}
                        id={key}
                        value={key}
                        ref={props.register}
                    />
                    <div className={classesCSS.RadioField} ></div>
                    <I18n render={() => translate("rightDialog." + props.name + "." + key)} />
                </label>
            })}
        </div>
    )
}

export default dialogInputRadio;