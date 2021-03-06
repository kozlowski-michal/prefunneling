import React from 'react';
import { Translate, t } from 'react-i18nify';
import InputCheckbox from '../../../Forms/InputCheckbox/InputCheckbox';
import classesCSS from './DialogForms.module.css'

const features = (props) => {
    const featuresChannelsList = [];
    Object.keys(props.dashboardData?.featuresChannels).map((key) => {
        featuresChannelsList.push({ value: key, label: t("dashboard.features.channels." + key) });
    });

    const featuresAutomationList = [];
    Object.keys(props.dashboardData?.featuresAutomation).map((key) => {
        featuresAutomationList.push({ value: key, label: t("dashboard.features.automation." + key) });
    });

    const featuresManagmentList = [];
    Object.keys(props.dashboardData?.featuresManagment).map((key) => {
        featuresManagmentList.push({ value: key, label: t("dashboard.features.managment." + key) });
    });

    const defaultFeaturesChannelsList = [];
    Object.keys(props.dashboardData?.featuresChannels).map((key) => {
        if (props.dashboardData?.featuresChannels[key]) defaultFeaturesChannelsList.push({ value: key, label: t("dashboard.features.channels." + key) });
    });

    const defaultFeaturesAutomationList = [];
    Object.keys(props.dashboardData?.featuresAutomation).map((key) => {
        if (props.dashboardData?.featuresAutomation[key]) defaultFeaturesAutomationList.push({ value: key, label: t("dashboard.features.automation." + key) });
    });

    const defaultFeaturesManagmentList = [];
    Object.keys(props.dashboardData?.featuresManagment).map((key) => {
        if (props.dashboardData?.featuresManagment[key]) defaultFeaturesManagmentList.push({ value: key, label: t("dashboard.features.managment." + key) });
    });

    console.log(featuresChannelsList);

    return (
        <React.Fragment>
            <div className={classesCSS.Message}>
                <Translate value={"dashboard.features.welcome"} />
            </div>
            <InputCheckbox
                name="featuresChannels"
                label={t("dashboard.features.channelsLabel")}
                list={featuresChannelsList}
                defaultList={defaultFeaturesChannelsList} />
            <InputCheckbox
                name="featuresAutomation"
                label={t("dashboard.features.automationLabel")}
                list={featuresAutomationList}
                defaultList={defaultFeaturesAutomationList} />
            <InputCheckbox
                name="featuresManagments"
                label={t("dashboard.features.managmentLabel")}
                list={featuresManagmentList}
                defaultList={defaultFeaturesManagmentList} />
        </React.Fragment>
    )
}

export default features;