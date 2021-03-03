import React, { useState } from 'react'

import classesCSS from './InputRange.module.css';

const InputRange = (props) => {
    let rangeDefaultValue = props.values.indexOf(props.defaultValue);
    let [currentValueFromRange, setValueFromRange] = useState(rangeDefaultValue);
    let style = props.style ? [classesCSS.RangeContainer, classesCSS[props.style]].join(" ") : classesCSS.RangeContainer;

    const onChangeHandler = (event) => {
        setValueFromRange(() => currentValueFromRange = event.target.value);
        props.onChange({ [props.name]: event });
    }

    const labelClickHandler = (labelIndex) => {
        setValueFromRange(() => currentValueFromRange = labelIndex);
        props.onChange({ [props.name]: props.values[labelIndex] });
    }

    return (
        <div className={style}>
            {/* creating labels */}
            <div className={classesCSS.RangeLabel} >
                {props.values.map((item, index) => {
                    let labelPosition = (100 / (props.values.length - 1)) * index;
                    return (
                        <div key={index} className={classesCSS.RangeLabelItemContainer} style={{ left: labelPosition + "%" }} >
                            <div
                                className={classesCSS.RangeLabelItem}
                                onClick={() => labelClickHandler(index)}>
                                {currentValueFromRange == index ?
                                    <strong>{item}</strong> :
                                    item
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* slider */}
            <div className={classesCSS.SliderContainer}>
                <input className={classesCSS.Slider}
                    type="range"
                    name={props.name}
                    id={props.name}
                    min="0"
                    max={props.values.length - 1}
                    value={currentValueFromRange}
                    onChange={(event) => onChangeHandler(event)}
                    ref={props.register()}
                />
            </div>
        </div>
    )
}

export default InputRange;