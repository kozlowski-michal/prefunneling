import React from 'react';
import { I18n, Translate, t } from 'react-i18nify';
import { Country, Industry } from '../../../../data/enums';

import { TeamSize } from '../../../../data/enums';
import classesCSS from './DialogForms.module.css'
import InputText from '../../../Forms/InputText/InputText';
import InputRange from '../../../Forms/InputRange/InputRange';
import InputMultiselect from '../../../Forms/InputMultiselect/InputMultiselect';

const company = (props) => {
    // values for inputs
    const industries = Object.values(Industry).map((industry) => {
        return {
            value: industry,
            label: t("shared.industry." + industry),
        }
    });

    let defaultIndustries = [];
    Object.entries(props.dashboardData?.companyIndustry).map((entry) => {
        let [key, value] = entry;
        if (value) defaultIndustries.push(key);
    });
    defaultIndustries = defaultIndustries.map((industry) => {
        return {
            value: industry,
            label: t("shared.industry." + industry),
        }
    });

    const countries = Object.values(Country).map((countryISO) => {
        return {
            value: countryISO,
            label: t("dashboard.company.countries." + countryISO),
        }
    });
    const defaultCountry = {
        value: props.dashboardData?.companyCountry,
        label: t("dashboard.company.countries." + props.dashboardData?.companyCountry)
    };

    return (
        <I18n render={() =>
            <React.Fragment>
                <InputText
                    name="companyName"
                    label={t("dashboard.company.name")}
                    defaultValue={props.dashboardData?.companyName}
                    onBlur={props.saveDataOnEvent} />
                <InputMultiselect
                    name="companyIndustry"
                    label={t("dashboard.company.industry")}
                    isMulti
                    list={industries}
                    placeholder={t("dashboard.company.placeholder")}
                    noOption={t("dashboard.company.noOption")}
                    defaultValue={defaultIndustries}
                    onChange={props.saveDataOnEvent} />
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
                <InputMultiselect
                    name="companyCountry"
                    label={t("dashboard.company.country")}
                    list={countries}
                    onChange={props.saveDataOnEvent}
                    defaultValue={defaultCountry} />
                <div className={classesCSS.Subtitle}>
                    <Translate value={"dashboard.company.teamsize"} />
                </div>
                <InputRange
                    name="companyTeamSize"
                    defaultValue={props.dashboardData?.companyTeamSize}
                    values={TeamSize}
                    onChange={props.saveDataOnEvent}
                    register={props.register} />
            </React.Fragment >}
        />
    )
}

export default company;