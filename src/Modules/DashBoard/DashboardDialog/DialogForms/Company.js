import React from 'react';
import { Translate, t } from 'react-i18nify';
import { Country, Industry } from '../../../../data/enums';

import { TeamSize } from '../../../../data/enums';
import InputText from '../../../Forms/InputText/InputText';
import InputRange from '../../../Forms/InputRange/InputRange';
import InputMultiselect from '../../../Forms/InputMultiselect/InputMultiselect';
import InputError from '../../../Forms/InputError/InputError';
import classesCSS from './DialogForms.module.css'

const company = ({ dashboardData, onChange, errors, register }) => {
    // values for inputs
    const industryList = Object.values(Industry).map((industry) => {
        return {
            value: industry,
            label: t("shared.industry." + industry),
        }
    });

    let defaultIndustryList = [];
    Object.entries(dashboardData?.companyIndustry).map((entry) => {
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
        value: dashboardData?.companyCountry,
        label: t("dashboard.company.countries." + dashboardData?.companyCountry)
    };

    return (
        <React.Fragment>
            <InputText
                name="companyName"
                label={t("dashboard.company.name")}
                defaultValue={dashboardData?.companyName}
                onBlur={onChange}
                register={register}
            />
            <InputError
                errorField={errors.companyName}
                message={t("dashboard.errors.noCompanyName")}
            />
            <InputMultiselect
                name="companyIndustry"
                label={t("dashboard.company.industry")}
                isMulti
                list={industryList}
                placeholder={t("dashboard.company.placeholder")}
                noOption={t("dashboard.company.noOption")}
                defaultValue={defaultIndustryList}
                onChange={onChange}
                register={register}
            />
            <InputError
                errorField={errors.companyIndustry}
                message={t("dashboard.errors.companyIndustry")}
            />
            <div className={classesCSS.Subtitle}>
                <Translate value={"dashboard.company.address"} />
            </div>
            <div className={classesCSS.Row}>
                <div className={classesCSS.Column}>
                    <InputText
                        name="companyStreet"
                        label={t("dashboard.company.street")}
                        defaultValue={dashboardData?.companyStreet}
                        onBlur={onChange}
                    />
                    <InputText
                        name="companyCity"
                        label={t("dashboard.company.city")}
                        defaultValue={dashboardData?.companyCity}
                        onBlur={onChange}
                    />
                </div>
                <div className={classesCSS.Column}>
                    <InputText
                        name="companySecondaryAddress"
                        label={t("dashboard.company.street2")}
                        defaultValue={dashboardData?.companySecondaryAddress}
                        onBlur={onChange}
                    />
                    <InputText
                        name="companyZip"
                        label={t("dashboard.company.zip")}
                        defaultValue={dashboardData?.companyZip}
                        onBlur={onChange}
                    />
                </div>
            </div>
            <InputMultiselect
                name="companyCountry"
                label={t("dashboard.company.country")}
                list={countryList}
                onChange={onChange}
                defaultValue={defaultCountry}
            />
            <div className={classesCSS.Subtitle}>
                <Translate value={"dashboard.company.teamsize"} />
            </div>
            <InputRange
                name="companyTeamSize"
                defaultValue={dashboardData?.companyTeamSize}
                values={TeamSize}
                onChange={onChange}
                register={register}
                colorLeft={getComputedStyle(document.documentElement).getPropertyValue('--formAzure')}
                colorRight={getComputedStyle(document.documentElement).getPropertyValue('--formViolet')}
                hoverOffset="2"
            />
        </React.Fragment >
    )
}

export default company;