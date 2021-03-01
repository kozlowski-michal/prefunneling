import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogTitle = (props) => (
    <p className={classesCSS.Title} >
        {props.title}
    </p>
)

export default leftDialogTitle;