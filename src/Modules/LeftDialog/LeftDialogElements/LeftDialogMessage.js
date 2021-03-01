import React from 'react';
import { Translate } from 'react-i18nify';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogMessage = (props) => (
    <p className={classesCSS.Message}>
        <Translate value={"leftDialog." + props.message} />
    </p>
)

export default leftDialogMessage;