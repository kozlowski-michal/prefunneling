import React, { useState } from 'react'

import classesCSS from './DialogInputRange.module.css';

const DialogInputRange = (props) => {

    let rangeDefaultValue = props.labels.indexOf(props.defaultValue) != -1 ? props.labels.indexOf(props.defaultValue) : 1;
    let [currentValueFromRange, setValueFromRange] = useState(rangeDefaultValue);

    const onChangeHandler = (event) => {
        setValueFromRange( () => currentValueFromRange = event.target.value );
    }

    const labelClickHandler = (labelIndex) => {
        setValueFromRange( () => currentValueFromRange = labelIndex );
    }

    return (
        <div className = {classesCSS.RangeContainer}>
            <div className = {classesCSS.RangeLabel} >
                {props.labels.map( (item, index) => {
                    let labelPosition = (100 / (props.labels.length - 1)) * index;

                    return (
                        <div key = {index} className = {classesCSS.RangeLabelItemContainer} style = {{left: labelPosition+"%"}} >
                            <div 
                            className = {classesCSS.RangeLabelItem} 
                            onClick = {() => labelClickHandler(index)}
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
            <div className = {classesCSS.SliderContainer}>
                <input className = {classesCSS.Slider}
                    type = "range"
                    name = {props.name}
                    id = {props.name}
                    min = "0"
                    max = {props.range}
                    value = {currentValueFromRange}
                    onChange = {onChangeHandler}
                    ref={props.register()}
                />
            </div>
        </div>
    )
}

export default DialogInputRange;