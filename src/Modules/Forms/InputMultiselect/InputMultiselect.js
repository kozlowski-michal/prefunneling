import React from 'react';
import Select from 'react-select'

import classesCSS from './InputMultiselect.module.css';
import inputMultiselectStyle from './InputMultiselectStyle'

//Props:
//  name
//  list
//  placeholder
//  noOption
//  isMulti
//  default?
//  label?
//  style? default as in dashboard
//  onChange?
//  register?

// styles for outer container are in css module file
// inner styles for select are in .js file

// returns selected items as object:
// multi:
// { name: { opt1: true, opt2: false, opt3: false, ...} }
// no multi:
// {name: opt}

const inputSelect = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;
    let dataToReturn = {};
    props.list.map((item) => {
        dataToReturn = { ...dataToReturn, [item.value]: false }
    });

    const returnValue = (dataFromSelect) => {
        switch (props.isMulti) {
            case true:
                dataFromSelect = dataFromSelect.map((item) => {
                    dataToReturn = { ...dataToReturn, [item.value]: true }
                })
                return props.onChange({ [props.name]: dataToReturn });
            default:
                return props.onChange({ [props.name]: dataFromSelect.value });
        }
    }

    const customStyle = props.style ? inputMultiselectStyle(props.style) : inputMultiselectStyle('dashboard');

    return (
        <div className={style}>
            {props.label ? <div className={classesCSS.SelectLabel}>
                {props.label}
            </div> : null}
            <Select
                styles={customStyle}
                placeholder={props.placeholder}
                noOptionsMessage={() => props.noOption}
                options={props.list}
                value={props.defaultValue}
                //defaultValue={props.defaultValue}
                isMulti={props.isMulti ? props.isMulti : null}
                isSearchable={false}
                menuPlacement="auto"
                onChange={(item) => returnValue(item)} />
        </div >
    )
}

export default inputSelect;

