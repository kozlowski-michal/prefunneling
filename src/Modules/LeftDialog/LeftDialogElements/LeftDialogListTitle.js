import React from 'react';
import { Translate } from 'react-i18nify';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogListTitle = (props) => (
    <p className={classesCSS.ListTitle}>
        {props.listTitle}
    </p>
)

export default leftDialogListTitle;