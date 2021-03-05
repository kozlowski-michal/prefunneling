import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import classesCSS from './DashboardDialog.module.css';
import Customer from './DialogForms/Customer';
import Company from './DialogForms/Company';
import Booking from './DialogForms/Booking';
import Features from './DialogForms/Features';
import FormContainer from './FormContainer/FormContainer';

const DashboardDialog = (props) => {
    let { register, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(yup.object().shape(
            {
                customerName: yup.string().required(),
                customerEmail: yup.string().required().email(),
            }
        ))
    });

    return (
        <div className={classesCSS.DashboardDialog} >
            <div className={classesCSS.DashboardColumn}>
                <FormContainer title="customer">
                    <Customer
                        dashboardData={props.dashboardData}
                        saveDataOnEvent={props.saveDataOnEvent}
                        errors={errors}
                        register={register}
                    />
                </FormContainer>
                <FormContainer title="company">
                    <Company
                        dashboardData={props.dashboardData}
                        saveDataOnEvent={props.saveDataOnEvent}
                        errors={errors}
                        register={register} />
                </FormContainer>
            </div>
            <div className={classesCSS.DashboardColumn}>
                <FormContainer boldTitle="booking">
                    <Booking
                        dashboardData={props.dashboardData}
                        saveDataOnEvent={props.saveDataOnEvent}
                        errors={errors}
                        register={register} />
                </FormContainer>
                <FormContainer title="features">
                    <Features />
                </FormContainer>
            </div>
        </div>
    )
}

export default DashboardDialog;