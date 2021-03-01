import React from 'react';
import { Translate } from 'react-i18nify';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogTitle = (props) => (
    <p className={classesCSS.Title} >
        <Translate value={"leftDialog." + props.title} />
    </p >
)

export default leftDialogTitle;