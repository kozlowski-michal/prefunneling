import React from 'react';
import { t } from 'react-i18nify';

import InputText from '../../../Forms/InputText/InputText';
import InputError from '../../../Forms/InputError/InputError';

const customer = (props) => (
    <React.Fragment>
        <InputText
            name="customerName"
            label={t("dashboard.customer.title")}
            defaultValue={props.dashboardData?.customerName}
            onBlur={props.saveDataOnEvent}
            register={props.register} />
        <InputError
            errorField={props.errors.customerName}
            message={t("dashboard.errors.noName")} />
        <InputText
            name="customerEmail"
            label={t("dashboard.customer.email")}
            defaultValue={props.dashboardData?.customerEmail}
            onBlur={props.saveDataOnEvent}
            register={props.register} />
        <InputError
            errorField={props.errors.customerEmail}
            message={t("dashboard.errors.noEmail")} />
        <InputText
            name="customerPhone"
            label={t("dashboard.customer.phone")}
            defaultValue={props.dashboardData?.customerPhone}
            onBlur={props.saveDataOnEvent} />
    </React.Fragment>
)

export default customer;