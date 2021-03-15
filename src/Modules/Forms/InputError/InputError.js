import React from 'react'
import classesCSS from './InputError.module.css';

const dialogError = ({ message, errorField }) => {
    return (
        <>
            <div className={classesCSS.dashboard} >
                {errorField &&
                    <p>
                        {message}
                    </p>}
            </div>
        </>
    )
}

export default dialogError;