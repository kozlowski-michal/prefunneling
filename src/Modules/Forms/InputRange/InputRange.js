import React, { useState } from 'react'

import classesCSS from './InputRange.module.css';

const InputRange = ({
    name,
    defaultValue = 1,
    values,
    onChange,
    register,
    colorRight,
    colorLeft,
    hoverOffset = 2, // changes gradient on hover, must be greater than 1
    // style, - it could be implemented if there will be others styles for component
}) => {

    let rangeDefaultValue = values.indexOf(defaultValue);
    const [currentValueFromRange, setValueFromRange] = useState(rangeDefaultValue);
    const [isHovered, setHover] = useState(false);

    const onChangeHandler = (event) => {
        setValueFromRange(() => event.target.value);
        onChange({ [name]: event });
    }

    const labelClickHandler = (labelIndex) => {
        setValueFromRange(() => labelIndex);
        onChange({ [name]: values[labelIndex] });
    }

    // colored dots on slider
    const dotsNumber = values.length;
    const steps = Array.from(Array(dotsNumber).keys()).
        map(step => step / (dotsNumber - 1));
    const stepsHover = Array.from(Array(dotsNumber).keys()).
        map(step => (step / (dotsNumber - 1)) / hoverOffset);

    const findColorAtSpot = (cLeftHex, cRightHex, percent) => {
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

        let outColorHex = "#";
        cLeftDec.map((item, index) => {
            let colorPart = (+item - (+ranges[index] * percent).toFixed(0));
            colorPart = colorPart.toString(16);
            if (colorPart.length === 1) colorPart = "0" + colorPart;
            outColorHex += (colorPart);
        });

        return outColorHex;
    }

    const colorsAtSpots = isHovered ?
        stepsHover.map(spot => findColorAtSpot(colorLeft, colorRight, spot))
        : steps.map(spot => findColorAtSpot(colorLeft, colorRight, spot));

    const gradientStyle = isHovered ?
        { backgroundImage: "linear-gradient(to right, " + colorLeft + ", " + colorRight + " " + hoverOffset * 100 + "%)" }
        : { backgroundImage: "linear-gradient(to right, " + colorLeft + ", " + colorRight + ")" }

    return (
        <div className={classesCSS.RangeContainer}>
            {/* creating labels */}
            <div className={classesCSS.RangeLabel} >
                {values.map((item, index) => {
                    let labelPosition = (100 / (values.length - 1)) * index;
                    return (
                        <div
                            key={index}
                            className={classesCSS.RangeLabelItemContainer}
                            style={{ left: labelPosition + "%" }}
                        >
                            <div
                                className={classesCSS.RangeLabelItem}
                                onClick={() => labelClickHandler(index)}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                {currentValueFromRange === index ?
                                    <strong>{item}</strong> :
                                    item
                                }
                            </div>
                            {/* creating slider's dots */}
                            {<div className={classesCSS.SliderCircleContainer} >
                                <div
                                    className={classesCSS.SliderCircle}
                                    style={{ background: colorsAtSpots[index] }}
                                />
                                <div
                                    className={classesCSS.SliderInnerCircle}
                                />
                            </div>}
                        </div>
                    )
                })}
            </div>
            {/* slider */}
            <div
                className={classesCSS.SliderContainer}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <input className={classesCSS.Slider}
                    style={gradientStyle}
                    type="range"
                    name={name}
                    id={name}
                    min="0"
                    max={values.length - 1}
                    value={currentValueFromRange}
                    onChange={(event) => onChangeHandler(event)}
                    ref={register()}
                />
            </div>
        </div >
    )
}

export default InputRange;