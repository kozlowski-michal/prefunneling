import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogMessage = ({ message }) => (
    <p className={classesCSS.Message} >
        {message}
    </p>
)

export default leftDialogMessage;