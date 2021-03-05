import React, { useState } from 'react';
import classesCSS from './InputColor.module.css';

const inputColor = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;

    return (
        <div className={style}>
            {props.label ? <div className={classesCSS.InputLabel}>
                {props.label}
            </div> : null}
            <div className={classesCSS.InputContainer}>
                {props.color}
                <div className={classesCSS.ColorContainer} style={{ backgroundColor: props.color }}>
                    <input
                        type="color"
                        name={props.name}
                        value={props.color}
                        onChange={(event) => props.onChange({ [props.name]: event.target.value })} />
                </div>
            </div>
        </div>
    )
}

export default inputColor;