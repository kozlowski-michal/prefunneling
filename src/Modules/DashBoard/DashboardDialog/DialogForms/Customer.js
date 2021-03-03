import React from 'react';
import { I18n, t } from 'react-i18nify';

import InputText from '../../../Forms/InputText/InputText';
import InputError from '../FormsElements/InputError';

const customer = (props) => (
    <React.Fragment>
        <InputText
            name="customerName"
            label={<I18n render={() => t("dashboard.customer.title")} />}
            defaultValue={props.dashboardData?.customerName}
            onBlur={props.saveDataOnEvent}
            register={props.register} />
        <InputError
            errorField={props.errors.name}
            errorType="noName" />
        <InputText
            name="customerEmail"
            label={<I18n render={() => t("dashboard.customer.email")} />}
            defaultValue={props.dashboardData?.customerEmail}
            onBlur={props.saveDataOnEvent}
            register={props.register} />
        <InputError
            errorField={props.errors.email}
            errorType="noEmail" />
        <InputText
            name="customerPhone"
            label={<I18n render={() => t("dashboard.customer.phone")} />}
            defaultValue={props.dashboardData?.customerPhone}
            onBlur={props.saveDataOnEvent} />
    </React.Fragment>
)

export default customer;