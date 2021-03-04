import React from 'react'
import classesCSS from './InputError.module.css';

//Props:
//  errorField
//  message
//  style?

const dialogError = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;

    return (
        <React.Fragment>
            <div className={style} >
                {props.errorField ?
                    <p>{props.message}</p> : null}
            </div>
        </React.Fragment>
    )
}

export default dialogError;