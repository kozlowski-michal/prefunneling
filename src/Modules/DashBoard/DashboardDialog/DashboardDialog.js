import React from 'react';

import classesCSS from './DashboardDialog.module.css';
import FormContainer from './FormsElements/FormContainer';

const DashboardDialog = (props) => {

    return (
        <div className={classesCSS.DashboardDialog} >
            <FormContainer title="Your data">
                dfgdf
            </FormContainer>
            <FormContainer title="Company data">
                dfgdf
            </FormContainer>
            <FormContainer boldTitle="Booking">
                dfgdf
            </FormContainer>
            <FormContainer title="Features">
                dfgdf
            </FormContainer>
        </div>
    )
}

export default DashboardDialog;