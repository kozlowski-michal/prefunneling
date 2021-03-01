import React from 'react'
import { Translate } from 'react-i18nify';

import { Steps } from '../../../data/enums';
import classesCSS from './DialogFormElements.module.css';

const dialogMessage = (props) => {
    return (
        <p className={classesCSS.Message} >
            <Translate value={"questionaire." + Object.keys(Steps)[props.step] + ".message"} />
        </p>
    )
}

export default dialogMessage;