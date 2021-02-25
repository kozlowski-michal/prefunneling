import React from 'react'
import { Translate } from 'react-i18nify';

import classesCSS from './DialogFormElements.module.css';

const dialogMessage = (props) => {
    return (
        <p className = {classesCSS.Message} >
            <Translate value = {"rightDialog."+props.step+".message"} />
        </p>
    )
}

export default dialogMessage;