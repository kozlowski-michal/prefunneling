import React from 'react';
import classesCSS from './InputSelect.module.css';

//Props:
//  name
//  list
//  label?
//  defaultValue?
//  style? default as in dashboard
//  onChange?
//  register?

export const DropDownSVG = () => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.18359 1L7.18359 7L13.1836 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const inputSelect = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;

    const returnValue = (label) => {
        let item = props.list.find((item) => item.label == label)
        props.onChange({ [props.name]: item.value });
    }

    return (
        <div className={style}>
            {props.label ? <div className={classesCSS.SelectLabel}>
                {props.label}
            </div> : null}
            <select
                name={props.name}
                className={classesCSS.Select}
                defaultValue={props.defaultValue}
                onChange={(event) => returnValue(event.target.value)}
                ref={props.register} >
                {props.list.map((item) => <option
                    key={item.value}>
                    {item.label}
                </option>
                )}
            </select>
            {!props.style ? <div className={classesCSS.DropDown}>
                <DropDownSVG />
            </div> : null}
        </div >
    )
}

export default inputSelect;