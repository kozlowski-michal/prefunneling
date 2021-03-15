import React from 'react'
import classesCSS from './InputError.module.css';

const dialogError = ({
    message,
    errorField,
    style,
}) => {
    let inputStyle = style ? classesCSS[style] : classesCSS.dashboard;

    return (
        <>
            <div className={inputStyle} >
                {
                    errorField &&
                    <p>
                        {message}
                    </p>
                }
            </div>
        </>
    )
}

export default dialogError;