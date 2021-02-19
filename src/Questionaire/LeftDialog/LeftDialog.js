import React from 'react';

import LeftDialogSummary from './leftDialogSchemas/leftDialogSummary'
import LeftDialogSchemas from './leftDialogSchemas/leftDialogSchemas'

const leftDialog = (props) => {

    return (
        <React.Fragment>
            <strong>
                <LeftDialogSchemas 
                    step = {props.step}
                    dialogData = {props.dialogData} 
                />
            </strong>
            <hr style={{width: "70%", height: "1px", backgroundColor: "#E5E5E5", color: "#E5E5E5", border: "none"}}/>
            <LeftDialogSummary 
                step = {props.step}
                dialogData = {props.dialogData}
            />
        </React.Fragment>
    )
}

export default leftDialog;