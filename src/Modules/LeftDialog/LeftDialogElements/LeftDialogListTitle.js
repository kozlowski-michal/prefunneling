import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogListTitle = (props) => (
    <p className={classesCSS.ListTitle}>{props.message}</p>
)

export default leftDialogListTitle;