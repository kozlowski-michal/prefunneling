import React from 'react';
import { Translate, t } from 'react-i18nify';
import { Website } from '../../../../data/enums';

import InputMultiselect from '../../../Forms/InputMultiselect/InputMultiselect';
import InputText from '../../../Forms/InputText/InputText';
import InputUpload from '../../../Forms/InputUpload/InputUpload';
import InputColor from '../../../Forms/InputColor/InputColor';
import classesCSS from './DialogForms.module.css'

const booking = ({ dashboardData, onChange, errors, register }) => {
    const websiteList = Website.map((option) => {
        return {
            value: option,
            label: t("dashboard.booking.website." + option),
        }
    });

    const defaultWebsite = {
        value: dashboardData?.bookingWebsite,
        label: t("dashboard.booking.website." + dashboardData?.bookingWebsite)
    };

    return (
        <>
            <InputMultiselect
                name="bookingWebsite"
                label={t("dashboard.booking.websiteLabel")}
                dataList={websiteList}
                onChange={onChange}
                defaultValue={defaultWebsite} />
            <InputText
                name="bookingUrl"
                before="https://"
                label={t("dashboard.booking.url")}
                defaultValue={dashboardData?.bookingUrl}
                onBlur={onChange} />
            <div className={classesCSS.Subtitle}>
                <Translate value={"dashboard.booking.design"} />
            </div>
            <div className={classesCSS.Row}>
                <div className={classesCSS.Column}>
                    <InputUpload
                        name="bookingLogo"
                        label={t("dashboard.booking.logoLabel")}
                    />
                </div>
                <div className={classesCSS.Column}>
                    <InputColor
                        name="bookingFontColor"
                        label={t("dashboard.booking.fontColorLabel")}
                        color={dashboardData?.bookingFontColor}
                        onChange={onChange} />
                    <InputColor
                        name="bookingButtonColor"
                        label={t("dashboard.booking.buttonColorLabel")}
                        color={dashboardData?.bookingButtonColor}
                        onChange={onChange} />

                </div>
            </div>
        </>
    )
}

export default booking;