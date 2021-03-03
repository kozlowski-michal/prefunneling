import React from 'react'
import classesCSS from './InputError.module.css';

//Props:
//  errorField
//  message
//  spaceholder?

const dialogError = (props) => {
    let style = props.spaceHolder ? [classesCSS.ErrorContainer, classesCSS.SpaceHolder].join(" ") : classesCSS.ErrorContainer;
    return (
        <React.Fragment>
            { props.spaceHolder ?
                <div className={style} >
                    {props.errorField ?
                        props.message : null}
                </div> :
                props.errorField ?
                    <div className={style} >
                        {props.message}
                    </div> : null
            }
        </React.Fragment>
    )
}

export default dialogError;