import React from 'react';
import Select from 'react-select'
import classesCSS from './InputMultiselect.module.css';

//Props:
//  name
//  list
//  default?
//  label?
//  style? default as in dashboard
//  onChange?
//  register?

// returns selected items as object:
// { name: { opt1: true, opt2: false, opt3: false, ...} }

const inputSelect = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;
    let dataToReturn = {};
    props.list.map((item) => {
        dataToReturn = { ...dataToReturn, [item.value]: false }
    });

    const returnValue = (items) => {
        items = items.map((item) => {
            dataToReturn = { ...dataToReturn, [item.value]: true }
        })
        props.onChange({ [props.name]: dataToReturn });
    }

    return (
        <div className={style}>
            {props.label ? <div className={classesCSS.SelectLabel}>
                {props.label}
            </div> : null}
            <div className={classesCSS.SelectContainer}>
                <Select
                    options={props.list}
                    defaultValue={props.defaultValue}
                    isMulti
                    onChange={(item) => returnValue(item)}
                />
            </div >
        </div >
    )
}

export default inputSelect;