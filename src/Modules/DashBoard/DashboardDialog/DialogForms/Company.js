import React from 'react';
import { I18n, Translate, t } from 'react-i18nify';

import { TeamSize } from '../../../../data/enums';
import classesCSS from './DialogForms.module.css'
import InputText from '../../../Forms/InputText/InputText';
import InputRange from '../../../Forms/InputRange/InputRange';

const company = (props) => (
    <I18n render={() =>
        <React.Fragment>
            <InputText
                name="companyName"
                label={t("dashboard.company.name")}
                defaultValue={props.dashboardData?.companyName}
                onBlur={props.saveDataOnEvent} />
            <InputText
                name="companyIndustry"
                label={t("dashboard.company.industry")}
                defaultValue={props.dashboardData?.companyIndustry}
                onBlur={props.saveDataOnEvent} />
            <div className={classesCSS.Subtitle}>
                <Translate value={"dashboard.company.address"} />
            </div>
            <div className={classesCSS.Row}>
                <div className={classesCSS.Column}>
                    <InputText
                        name="companyStreet"
                        label={t("dashboard.company.street")}
                        defaultValue={props.dashboardData?.companyStreet}
                        onBlur={props.saveDataOnEvent} />
                    <InputText
                        name="companyCity"
                        label={t("dashboard.company.city")}
                        defaultValue={props.dashboardData?.companyCity}
                        onBlur={props.saveDataOnEvent} />
                </div>
                <div className={classesCSS.Column}>
                    <InputText
                        name="companySecondaryAddress"
                        label={t("dashboard.company.street2")}
                        defaultValue={props.dashboardData?.companySecondaryAddress}
                        onBlur={props.saveDataOnEvent} />
                    <InputText
                        name="companyZip"
                        label={t("dashboard.company.zip")}
                        defaultValue={props.dashboardData?.companyZip}
                        onBlur={props.saveDataOnEvent} />
                </div>
            </div>
            <InputText
                name="companyCountry"
                label={t("dashboard.company.country")}
                defaultValue={props.dashboardData?.companyCountry}
                onBlur={props.saveDataOnEvent} />
            <div className={classesCSS.Subtitle}>
                <Translate value={"dashboard.company.teamsize"} />
            </div>
            <InputRange
                name="companyTeamSize"
                defaultValue={props.dashboardData?.companyTeamSize}
                values={TeamSize}
                onChange={props.saveDataOnEvent}
                register={props.register} />
        </React.Fragment>}
    />
)

export default company;