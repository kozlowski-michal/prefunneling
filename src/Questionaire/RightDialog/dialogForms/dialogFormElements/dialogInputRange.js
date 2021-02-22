import React from 'react'
import { I18n, translate } from 'react-i18nify';

import classesCSS from './dialogFormElements.module.css';

const dialogInputRange = (props) => {
    return (
        <React.Fragment>
            <input className = {classesCSS.Range}
                type = "range"
                name = {props.name}
                id = {props.name}
                min = "0"
                max = {props.range}
                ref={props.register()}
            />
            <div className = {classesCSS.RangeLabel} >
                {props.labels.map( (item, index) => {
                    return (<span key = {index}>{item}</span>)
                })}
             </div>
        </React.Fragment>
    )
}

export default dialogInputRange;