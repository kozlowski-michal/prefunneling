import React from 'react';
import { Translate } from 'react-i18nify';

import classesCSS from './FormContainer.module.css';

const formContainer = (props) => (
    <div className={classesCSS.FormContainer}>
        { props.title ? <h4 className={classesCSS.Title}>
            <Translate value={"dashboard." + props.title + ".title"} />
        </h4> : null}
        { props.boldTitle ? <h5 className={classesCSS.BoldTitle}>
            <Translate value={"dashboard." + props.boldTitle + ".title"} />
        </h5> : null}
        {props.children}
    </div>
)

export default formContainer;