import React from 'react';

import classesCSS from './FormsElements.module.css';

const formContainer = (props) => (
    <div className={classesCSS.FormContainer}>
        <h4 className={classesCSS.Title}>{props.title}</h4>
        <h5 className={classesCSS.BoldTitle}>{props.boldTitle}</h5>
        {props.children}
    </div>
)

export default formContainer;