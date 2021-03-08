import React from 'react';
import { Translate, t } from 'react-i18nify';
import { Country, Industry } from '../../../../data/enums';

import { TeamSize } from '../../../../data/enums';
import InputText from '../../../Forms/InputText/InputText';
import InputRange from '../../../Forms/InputRange/InputRange';
import InputMultiselect from '../../../Forms/InputMultiselect/InputMultiselect';
import InputError from '../../../Forms/InputError/InputError';
import classesCSS from './DialogForms.module.css'

const company = (props) => {
    // values for inputs
    const industryList = Object.values(Industry).map((industry) => {
        return {
            value: industry,
            label: t("shared.industry." + industry),
        }
    });

    let defaultIndustryList = [];
    Object.entries(props.dashboardData?.companyIndustry).map((entry) => {
        let [key, value] = entry;
        if (value) defaultIndustryList.push(key);
    });

    defaultIndustryList = defaultIndustryList.map((industry) => {
        return {
            value: industry,
            label: t("shared.industry." + industry),
        }
    });

    const countryList = Object.values(Country).map((countryISO) => {
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
        <React.Fragment>
            <InputText
                name="companyName"
                label={t("dashboard.company.name")}
                defaultValue={props.dashboardData?.companyName}
                onBlur={props.saveDataOnEvent}
                register={props.register} />
            <InputError
                errorField={props.errors.companyName}
                message={t("dashboard.errors.noCompanyName")} />
            <InputMultiselect
                name="companyIndustry"
                label={t("dashboard.company.industry")}
                isMulti
                list={industryList}
                placeholder={t("dashboard.company.placeholder")}
                noOption={t("dashboard.company.noOption")}
                defaultValue={defaultIndustryList}
                onChange={props.saveDataOnEvent}
                register={props.register} />
            <InputError
                errorField={props.errors.companyIndustry}
                message={t("dashboard.errors.companyIndustry")} />
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
                list={countryList}
                onChange={props.saveDataOnEvent}
                defaultValue={defaultCountry} />
            {/*<InputSelect
                name="companyCountry"
                label={t("dashboard.company.country")}
                list={countryList}
                onChange={props.saveDataOnEvent}
            defaultValue={t("dashboard.company.countries." + props.dashboardData.companyCountry)} />*/}
            <div className={classesCSS.Subtitle}>
                <Translate value={"dashboard.company.teamsize"} />
            </div>
            <InputRange
                name="companyTeamSize"
                defaultValue={props.dashboardData?.companyTeamSize}
                values={TeamSize}
                onChange={props.saveDataOnEvent}
                register={props.register} />
        </React.Fragment >
    )
}

export default company;