import React from 'react';

import LeftDialogSummary from './LeftDialogElements/LeftDialogSummary'
import LeftDialogSchemas from './LeftDialogElements/LeftDialogSchemas'

import classesCSS from './LeftDialog.module.css';

const leftDialog = (props) => {
    return (
        <React.Fragment>
            <LeftDialogSchemas
                step={props.step}
                dialogData={props.dialogData}
            />
            <div className={classesCSS.TitleLine} ></div>
            <LeftDialogSummary
                step={props.step}
                dialogData={props.dialogData}
            />
        </React.Fragment>
    )
}

export default leftDialog;