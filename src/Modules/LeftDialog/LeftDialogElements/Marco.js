import React from 'react';
import { Translate } from 'react-i18nify';

import classesCSS from './LeftDialogElements.module.css';
import MarcoImg from '../../../assets/Marco.png';

const marco = () => (
    <div className={classesCSS.Marco} >
        <img src={MarcoImg} alt="Marco Dzierma" width="40" height="40" />
        <p className={classesCSS.MarcoSignature} >
            <strong>Marco Dzierma</strong><br />
            <Translate value="leftDialog.MarcoTitle" />
        </p>
    </div>
)

export default marco;