import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogTitle = ({ title }) => (
    <p className={classesCSS.Title} >
        {title}
    </p>
)

export default leftDialogTitle;