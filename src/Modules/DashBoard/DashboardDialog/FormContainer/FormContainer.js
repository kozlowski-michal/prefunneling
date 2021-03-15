import React from 'react';
import { Translate } from 'react-i18nify';

import classesCSS from './FormContainer.module.css';

const formContainer = ({ title, boldTitle, children }) => (
    <div className={classesCSS.FormContainer}>
        { title &&
            <h4 className={classesCSS.Title}>
                <Translate value={"dashboard." + title + ".title"} />
            </h4>}
        { boldTitle &&
            <h5 className={classesCSS.BoldTitle}>
                <Translate value={"dashboard." + boldTitle + ".title"} />
            </h5>}
        {children}
    </div>
)

export default formContainer;