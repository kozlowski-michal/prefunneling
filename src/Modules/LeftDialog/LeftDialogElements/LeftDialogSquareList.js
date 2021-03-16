import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogSquareList = ({ list }) => (
    <div className={classesCSS.listContainer}>
        {list}
    </div>
)

export default leftDialogSquareList;