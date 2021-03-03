import React from 'react';
import { Translate, I18n, t } from 'react-i18nify';

import { TeamSize } from '../../../../data/enums';
import classesCSS from './DialogForms.module.css'
import InputText from '../../../Forms/InputText/InputText';
import InputError from '../FormsElements/InputError';
import InputRange from '../FormsElements/InputRange';

const company = (props) => (
    <React.Fragment>
        <InputText
            name="companyName"
            label={<I18n render={() => t("dashboard.company.name")} />}
            defaultValue={props.dashboardData?.companyName}
            onBlur={props.saveDataOnEvent} />
        <InputText
            name="companyIndustry"
            label={<I18n render={() => t("dashboard.company.industry")} />}
            defaultValue={props.dashboardData?.companyIndustry}
            onBlur={props.saveDataOnEvent} />
        <div className={classesCSS.Subtitle}>
            <Translate value={"dashboard.company.address"} />
        </div>
        <div className={classesCSS.Row}>
            <div className={classesCSS.Column}>
                <InputText
                    name="companyStreet"
                    label={<I18n render={() => t("dashboard.company.street")} />}
                    defaultValue={props.dashboardData?.companyStreet}
                    onBlur={props.saveDataOnEvent} />
                <InputText
                    name="companyCity"
                    label={<I18n render={() => t("dashboard.company.city")} />}
                    defaultValue={props.dashboardData?.companyCity}
                    onBlur={props.saveDataOnEvent} />
            </div>
            <div className={classesCSS.Column}>
                <InputText
                    name="companySecondaryAddress"
                    label={<I18n render={() => t("dashboard.company.street2")} />}
                    defaultValue={props.dashboardData?.companySecondaryAddress}
                    onBlur={props.saveDataOnEvent} />
                <InputText
                    name="companyZip"
                    label={<I18n render={() => t("dashboard.company.zip")} />}
                    defaultValue={props.dashboardData?.companyZip}
                    onBlur={props.saveDataOnEvent} />
            </div>
        </div>
        <InputText
            name="companyCountry"
            label={<I18n render={() => t("dashboard.company.country")} />}
            defaultValue={props.dashboardData?.companyCountry}
            onBlur={props.saveDataOnEvent} />
        <div className={classesCSS.Subtitle}>
            <Translate value={"dashboard.company.teamsize"} />
        </div>
        <InputRange
            name="teamSize"
            component="company"
            saveDataOnEvent={props.saveDataOnEvent}
            defaultValue={props.companyData?.teamSize}
            labels={TeamSize}
            range="4"
            register={props.register} />
    </React.Fragment>
)

export default company;