import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogSquareList = (props) => (
    <div className={classesCSS.listContainer}>
        {props.list}
    </div>
)

export default leftDialogSquareList;