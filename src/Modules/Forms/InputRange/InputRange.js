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

    const colorRight = getComputedStyle(document.documentElement).getPropertyValue('--formViolet');
    const colorLeft = getComputedStyle(document.documentElement).getPropertyValue('--formAzure');

    // colored dots on slider
    const dotsNumber = props.values.length;
    const steps = Array.from(Array(dotsNumber).keys()).
        map(step => step / (dotsNumber - 1));

    const findColorAtSpotRGB = (cLeftHex, cRightHex, percent) => {
        const cLeftDec = cLeftHex.
            slice(2).
            match(/.{1,2}/g).
            map((sub) => parseInt(sub, 16));
        const cRightDec = cRightHex.
            slice(2).
            match(/.{1,2}/g).
            map((sub) => parseInt(sub, 16));

        const ranges = cLeftDec.map((item, index) => {
            return (+item - +cRightDec[index])
        });

        const colorAtSpotRGB = cLeftDec.map((item, index) => {
            return (+item - (+ranges[index] * percent).toFixed(0));
        });

        return "rgb(" + colorAtSpotRGB[0] + "," + colorAtSpotRGB[1] + "," + colorAtSpotRGB[2] + ")";
    }

    const colorsAtSpots = steps.map(spot => findColorAtSpotRGB(colorLeft, colorRight, spot));
    console.log(colorsAtSpots);

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
                            {/* creating slider's dots */}
                            {/*<div className={classesCSS.SliderCircleContainer} >
                                <div
                                    className={classesCSS.SliderCircle}
                                    style={{ borderColor: colorsAtSpots[index] }}
                                />
                            </div>*/}
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
        </div >
    )
}

export default InputRange;