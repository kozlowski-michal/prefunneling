import React from 'react'
import { Translate } from 'react-i18nify';

import classesCSS from './dialogFormElements.module.css';

const dialogMessage = (props) => {
    return (
        <p>
            <Translate value = {"rightDialog."+props.step+".message"} />
        </p>
    )
}

export default dialogMessage;