import React from 'react'
import { t } from 'react-i18nify';

import { Steps } from '../../../data/enums';
import classesCSS from './DialogInputCheckbox.module.css';

const dialogInputCheckbox = (props) => {
    return (
        <div className={classesCSS.Container}>
            {t("questionaire." + Object.keys(Steps)[props.step] + ".need")}
            {Object.keys(props.keys).map((key) => {
                return <label key={key} className={classesCSS.CheckboxContainer}>
                    <input
                        type="checkbox"
                        onChange={(event) => props.onChange({ servicesNeeded: { [event.target.value]: event.target.checked } })}
                        defaultChecked={props.defaultValue[key]}
                        name={props.name}
                        id={key}
                        value={key}
                        ref={props.register}
                    />
                    <div className={classesCSS.CheckboxField} />
                    {t("questionaire." + props.name + "." + key)}
                </label>
            })}
        </div>
    )
}

export default dialogInputCheckbox;