import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogMessage = (props) => (
    <p className={classesCSS.Message} >
        {props.message}
    </p>
)

export default leftDialogMessage;