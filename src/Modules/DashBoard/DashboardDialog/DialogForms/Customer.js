import React from 'react';

import InputText from '../FormsElements/InputText';
import InputError from '../FormsElements/InputError';

const customer = (props) => (
    <React.Fragment>
        <InputText
            name="name"
            component="customer"
            defaultValue={props.customerData?.name}
            saveDataOnEvent={props.saveDataOnEvent}
            register={props.register} />
        <InputError
            errorField={props.errors.name}
            errorType="noName" />
        <InputText
            name="email"
            component="customer"
            defaultValue={props.customerData?.email}
            saveDataOnEvent={props.saveDataOnEvent}
            register={props.register} />
        <InputError
            errorField={props.errors.email}
            errorType="noEmail" />
        <InputText
            name="phone"
            component="customer"
            defaultValue={props.customerData?.phone}
            saveDataOnEvent={props.saveDataOnEvent} />
    </React.Fragment>
)

export default customer;