import React, { useState } from 'react';
import classesCSS from './InputText.module.css';

const InputText = ({
    name,
    label,
    placeholder,
    defaultValue,
    before,
    onBlur,
    onKeyUp,
    register
}) => {
    const [eventValue, setEventValue] = useState(defaultValue);

    // onBlur triggers only when new value is different than previous
    const onBlurHandler = (event, callback) => {
        let newValue = event.target.value;
        if (eventValue != newValue) {
            callback({ [name]: newValue });
            setEventValue(() => newValue);
        }
    }

    return (
        <div className={classesCSS.default}>
            {label &&
                <div className={classesCSS.InputLabel}>
                    {label}
                </div>}
            <div className={classesCSS.InputContainer}>
                {before &&
                    <div className={classesCSS.InputBefore}>
                        {before}
                    </div>}
                <input
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className={classesCSS.Input}
                    onKeyUp={onKeyUp && ((event) => onKeyUp({ [name]: event.target.value }))}
                    onBlur={onBlur && ((event) => onBlurHandler(event, onBlur))}
                    type="text"
                    ref={register} />
            </div>
        </div>
    )
}

export default InputText;