import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogRoundList = ({ list }) => (
    <div className={classesCSS.listContainer}>
        {list}
    </div>
)

export default leftDialogRoundList;