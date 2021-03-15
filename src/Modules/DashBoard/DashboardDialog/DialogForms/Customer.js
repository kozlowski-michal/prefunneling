import React from 'react';
import { t } from 'react-i18nify';

import InputText from '../../../Forms/InputText/InputText';
import InputError from '../../../Forms/InputError/InputError';

const customer = ({ dashboardData, onChange, errors, register }) => (
    <React.Fragment>
        <InputText
            name="customerName"
            label={t("dashboard.customer.name")}
            defaultValue={dashboardData?.customerName}
            onBlur={onChange}
            register={register} />
        <InputError
            errorField={errors.customerName}
            message={t("dashboard.errors.noName")} />
        <InputText
            name="customerEmail"
            label={t("dashboard.customer.email")}
            defaultValue={dashboardData?.customerEmail}
            onBlur={onChange}
            register={register} />
        <InputError
            errorField={errors.customerEmail}
            message={t("dashboard.errors.noEmail")} />
        <InputText
            name="customerPhone"
            label={t("dashboard.customer.phone")}
            defaultValue={dashboardData?.customerPhone}
            onBlur={onChange} />
    </React.Fragment>
)

export default customer;