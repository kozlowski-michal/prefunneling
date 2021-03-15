import React from 'react';
import { Translate, t } from 'react-i18nify';
import InputCheckbox from '../../../Forms/InputCheckbox/InputCheckbox';
import classesCSS from './DialogForms.module.css'

const features = ({ dashboardData, onChange, errors, register }) => {
    const featuresChannelsList = [];
    Object.keys(dashboardData?.featuresChannels).map((key) => {
        featuresChannelsList.push({ value: key, label: t("dashboard.features.channels." + key) });
    });

    const featuresAutomationList = [];
    Object.keys(dashboardData?.featuresAutomation).map((key) => {
        featuresAutomationList.push({ value: key, label: t("dashboard.features.automation." + key) });
    });

    const featuresManagmentList = [];
    Object.keys(dashboardData?.featuresManagment).map((key) => {
        featuresManagmentList.push({ value: key, label: t("dashboard.features.managment." + key) });
    });

    const defaultFeaturesChannelsList = [];
    Object.keys(dashboardData?.featuresChannels).map((key) => {
        if (dashboardData?.featuresChannels[key]) defaultFeaturesChannelsList.push({ value: key, label: t("dashboard.features.channels." + key) });
    });

    const defaultFeaturesAutomationList = [];
    Object.keys(dashboardData?.featuresAutomation).map((key) => {
        if (dashboardData?.featuresAutomation[key]) defaultFeaturesAutomationList.push({ value: key, label: t("dashboard.features.automation." + key) });
    });

    const defaultFeaturesManagmentList = [];
    Object.keys(dashboardData?.featuresManagment).map((key) => {
        if (dashboardData?.featuresManagment[key]) defaultFeaturesManagmentList.push({ value: key, label: t("dashboard.features.managment." + key) });
    });

    return (
        <React.Fragment>
            <div className={classesCSS.Message}>
                <Translate value={"dashboard.features.welcome"} />
            </div>
            <InputCheckbox
                name="featuresChannels"
                label={t("dashboard.features.channelsLabel")}
                onChange={onChange}
                list={featuresChannelsList}
                defaultList={defaultFeaturesChannelsList} />
            <InputCheckbox
                name="featuresAutomation"
                label={t("dashboard.features.automationLabel")}
                onChange={onChange}
                list={featuresAutomationList}
                defaultList={defaultFeaturesAutomationList} />
            <InputCheckbox
                name="featuresManagment"
                label={t("dashboard.features.managmentLabel")}
                onChange={onChange}
                list={featuresManagmentList}
                defaultList={defaultFeaturesManagmentList} />
        </React.Fragment>
    )
}

export default features;