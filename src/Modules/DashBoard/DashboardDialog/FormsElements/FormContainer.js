import React from 'react';
import { I18n, Translate, translate } from 'react-i18nify';

import classesCSS from './FormsElements.module.css';

const formContainer = (props) => (
    <div className={classesCSS.FormContainer}>
        { props.title ? <h4 className={classesCSS.Title}>
            <Translate value={"dashboard." + props.title + ".title"} />
        </h4> : null}
        { props.boldTitle ? <h5 className={classesCSS.BoldTitle}>
            <Translate value={"dashboard." + props.BoldTitle + ".title"} />
        </h5> : null}
        {props.children}
    </div>
)

export default formContainer;