import React from 'react'
import { t } from 'react-i18nify';

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
                        onChange={(event) => props.saveDataOnEvent({ website: event.target.value })}
                        type="radio"
                        name={props.name}
                        id={key}
                        value={key}
                        ref={props.register}
                    />
                    <div className={classesCSS.RadioField} ></div>
                    {t("questionaire." + props.name + "." + key)}
                </label>
            })}
        </div>
    )
}

export default dialogInputRadio;