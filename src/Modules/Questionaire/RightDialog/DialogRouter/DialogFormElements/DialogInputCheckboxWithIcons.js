import React from 'react'
import { t } from 'react-i18nify';

import IconsSVG from '../../../../../data/svg/DialogIcons';
import classesCSS from './DialogInputCheckboxWithIcons.module.css';

const dialogInputCheckbox = (props) => (
    <div className={classesCSS.Container}>
        {props.keys.map((key) => {
            return <label key={key} className={classesCSS.CheckboxContainer}>
                <input
                    type="checkbox"
                    onChange={(event) => props.onChange({ industry: { [event.target.value]: event.target.checked } })}
                    defaultChecked={props.defaultValue[key]}
                    name={props.name}
                    id={key}
                    value={key}
                    ref={props.register}
                />
                <div className={classesCSS.CheckboxField} />
                <div className={classesCSS.IconContainer}>
                    <IconsSVG industry={key} />
                </div>
                <div className={classesCSS.TextContainer}>
                    {t("shared." + props.name + "." + key)}
                </div>
            </label>
        })}
    </div>
)

export default dialogInputCheckbox;