import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogRoundList = (props) => (
    <div className={classesCSS.listContainer}>
        {props.list}
    </div>
)

export default leftDialogRoundList;