import React, { useState } from 'react';
import classesCSS from './InputText.module.css';

//Props:
//  name
//  label?
//  before?
//  defaultValue?
//  placeholder?
//  style? default as in dashboard
//  onBlur?
//  onKeyUp?
//  register?

const InputText = (props) => {
    let [eventValue, setEventValue] = useState(props.defaultValue);
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;

    // onBlur triggers only when new value is different than before
    const onBlurHandler = (event, callback) => {
        let newValue = event.target.value;
        if (eventValue != newValue) {
            callback({ [props.name]: newValue });
            setEventValue(() => newValue);
        }
    }

    return (
        <div className={style}>
            {props.label ? <div className={classesCSS.InputLabel}>
                {props.label}
            </div> : null}
            <div className={classesCSS.InputContainer}>
                {props.before ? <div className={classesCSS.InputBefore}>
                    {props.before}
                </div> : null}
                < input
                    name={props.name}
                    defaultValue={props.defaultValue ? props.defaultValue : null}
                    placeholder={props.placeholder ? props.placeholder : null}
                    className={classesCSS.Input}
                    onKeyUp={props.onKeyUp ? (event) => props.onKeyUp({ [props.name]: event.target.value }) : null}
                    onBlur={props.onBlur ? (event) => onBlurHandler(event, props.onBlur) : null}
                    type="text"
                    ref={props.register ? props.register : null} />
            </div>
        </div>
    )
}

export default InputText;