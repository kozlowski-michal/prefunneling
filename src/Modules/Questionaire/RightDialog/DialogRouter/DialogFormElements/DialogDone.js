import React from 'react';
import { Translate } from 'react-i18nify';

import { Steps } from '../../../data/enums';
import classesCSS from './DialogFormElements.module.css';

const dialogDone = (props) => {
    return (
        <div className={classesCSS.DoneContainer} >
            <div className={classesCSS.DoneWheel} >
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.999955 11.5L7.99998 18.5L25.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className={classesCSS.Title} >
                <Translate value={"questionaire." + Object.keys(Steps)[props.step] + ".pretitle"} />
            </h2>
            <p className={classesCSS.MessageDone} >
                <Translate value={"questionaire." + Object.keys(Steps)[props.step] + ".message"} />
            </p>
        </div>
    )
}

export default dialogDone;