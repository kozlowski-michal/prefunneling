import React from 'react'
import { Translate } from 'react-i18nify';

import classesCSS from './dialogTitle.module.css';

const dialogTitle = (props) => {
    return (
        <React.Fragment>
            <h4 className = {classesCSS.Title} >
                <Translate value = {"rightDialog."+props.step+".pretitle"} />
            </h4>
            <h2 className = {classesCSS.Title} >
                <Translate value = {"rightDialog."+props.step+".title"} />
            </h2>
        </React.Fragment>
    )
}

export default dialogTitle;