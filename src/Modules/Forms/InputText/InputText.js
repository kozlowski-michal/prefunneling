import React, { useState } from 'react';
import classesCSS from './InputText.module.css';

//Props:
//  name
//  label?
//  defaultValue?
//  placeholder?
//  class? default as in dashboard
//  onBlur?
//  onKeyUp?
//  register?

const InputText = (props) => {
    let [eventValue, setEventValue] = useState(props.defaultValue);
    let style = props.style ? [classesCSS.Input, classesCSS[props.style]].join(" ") : classesCSS.Input;

    // onBlur triggers only when new value is different than before
    const onBlurHandler = (event, callback) => {
        let newValue = event.target.value;
        if (eventValue != newValue) {
            callback({ [props.name]: newValue });
            setEventValue(() => newValue);
        }
    }

    return (
        <div className={classesCSS.InputContainer}>
            {props.label ? <div className={classesCSS.InputLabel}>
                {props.label}
            </div> : null}
            < input
                name={props.name}
                defaultValue={props.defaultValue ? props.defaultValue : null}
                placeholder={props.placeholder ? props.placeholder : null}
                className={style}
                onKeyUp={props.onKeyUp ? (event) => props.onKeyUp({ [props.name]: event.target.value }) : null}
                onBlur={props.onBlur ? (event) => onBlurHandler(event, props.onBlur) : null}
                type="text"
                ref={props.register ? props.register : null} />
        </div>
    )
}

export default InputText;