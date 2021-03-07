import React from 'react';
import classesCSS from './InputCheckbox.module.css';

//Props:
//  name
//  label
//  list
//  defaultList?
//  register?

// returns selected items as object:
// { name: { opt1: true, opt2: false, opt3: false, ...} }

const inputCheckbox = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.default;

    let dataToReturn = {}
    props.list.map((item) => {
        dataToReturn = { ...dataToReturn, [item.value]: props.defaultList.some(defaultItem => defaultItem.value === item.value) }
    });

    const onChangeHandler = (dataFromCheckbox) => {
        dataToReturn[dataFromCheckbox] = !dataToReturn[dataFromCheckbox];
        return props.onChange({ [props.name]: dataToReturn });
    }

    return (
        <div className={style}>
            <div className={classesCSS.Title}>
                {props.label}
            </div >
            {props.list?.map((item) => {
                return <div key={item.value} className={classesCSS.Container}>
                    <label className={classesCSS.Label}>
                        <input
                            type="checkbox"
                            onChange={(data) => { onChangeHandler(data.target.value) }}
                            defaultChecked={props.defaultList.some(defaultItem => defaultItem.value === item.value)}
                            name={item.name}
                            id={item.value}
                            value={item.value}
                            ref={props.register}
                        />
                        <div className={classesCSS.CheckboxField} ></div>
                        <span>{item.label}</span>
                    </label>
                    <div className={classesCSS.ReadMore}>
                        Read more
                    </div>
                </div>
            })}

        </div >
    )
}

export default inputCheckbox;