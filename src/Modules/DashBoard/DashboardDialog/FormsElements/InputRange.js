import React, { useState } from 'react'

import classesCSS from './InputRange.module.css';

const InputRange = (props) => {
    let rangeDefaultValue = props.labels.indexOf(props.defaultValue);
    let [currentValueFromRange, setValueFromRange] = useState(rangeDefaultValue);

    const onChangeHandler = (event) => {
        setValueFromRange(() => currentValueFromRange = event.target.value);
        props.saveDataOnEvent(props.component, { [props.name]: event });
    }

    const labelClickHandler = (labelIndex) => {
        setValueFromRange(() => currentValueFromRange = labelIndex);
        props.saveDataOnEvent(props.component, { [props.name]: props.labels[labelIndex] });
    }

    return (
        <div className={classesCSS.RangeContainer}>
            <div className={classesCSS.RangeLabel} >
                {props.labels.map((item, index) => {
                    let labelPosition = (100 / (props.labels.length - 1)) * index;
                    return (
                        <div key={index} className={classesCSS.RangeLabelItemContainer} style={{ left: labelPosition + "%" }} >
                            <div
                                className={classesCSS.RangeLabelItem}
                                onClick={() => labelClickHandler(index)}
                            >
                                {currentValueFromRange == index ?
                                    <strong>{item}</strong> :
                                    item
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={classesCSS.SliderContainer}>
                <input className={classesCSS.Slider}
                    type="range"
                    name={props.name}
                    id={props.name}
                    min="0"
                    max={props.range}
                    value={currentValueFromRange}
                    onChange={(event) => onChangeHandler(event)}
                    ref={props.register()}
                />
            </div>
        </div>
    )
}

export default InputRange;