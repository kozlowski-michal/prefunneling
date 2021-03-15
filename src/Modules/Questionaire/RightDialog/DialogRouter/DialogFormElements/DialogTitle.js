import React from 'react'
import { Translate } from 'react-i18nify';

import { Steps } from '../../../data/enums';
import classesCSS from './DialogFormElements.module.css';

const dialogTitle = (props) => {
    return (
        <>
            <h4 className={classesCSS.Title} >
                <Translate value={"questionaire." + Object.keys(Steps)[props.step] + ".pretitle"} />
            </h4>
            <h2 className={classesCSS.Title} >
                <Translate value={"questionaire." + Object.keys(Steps)[props.step] + ".title"} />
            </h2>
        </>
    )
}

export default dialogTitle;