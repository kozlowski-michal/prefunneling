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

const inputSelect = ({
    name,
    dataList,
    placeholder,
    noOption,
    isMulti,
    defaultValue,
    label,
    style,
    onChange,
    register,
}) => {
    let dataToReturn = {};
    dataList.map((item) => {
        dataToReturn = { ...dataToReturn, [item.value]: false }
    });

    const returnValue = (dataFromSelect) => {
        switch (isMulti) {
            case true:
                dataFromSelect = dataFromSelect.map((item) => {
                    dataToReturn = { ...dataToReturn, [item.value]: true }
                })
                return onChange({ [name]: dataToReturn });
            default:
                return onChange({ [name]: dataFromSelect.value });
        }
    }

    const customStyle = inputMultiselectStyle('dashboard');

    return (
        <div className={classesCSS.dashboard}>
            {label &&
                <div className={classesCSS.SelectLabel}>
                    {label}
                </div>}
            <Select
                styles={customStyle}
                placeholder={placeholder}
                noOptionsMessage={() => noOption}
                options={dataList}
                value={defaultValue}
                isMulti={isMulti}
                isSearchable={false}
                menuPlacement="auto"
                onChange={(item) => returnValue(item)} />
        </div >
    )
}

export default inputSelect;

