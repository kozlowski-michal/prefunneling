import React from 'react';

import classesCSS from './LeftDialogElements.module.css';

const leftDialogListTitle = ({ listTitle }) => (
    <p className={classesCSS.ListTitle}>
        {listTitle}
    </p>
)

export default leftDialogListTitle;