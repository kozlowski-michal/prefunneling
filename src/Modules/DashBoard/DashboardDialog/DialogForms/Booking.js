import React from 'react';
import { Translate, t } from 'react-i18nify';
import { Website } from '../../../../data/enums';

import InputMultiselect from '../../../Forms/InputMultiselect/InputMultiselect';
import InputText from '../../../Forms/InputText/InputText';
import InputUpload from '../../../Forms/InputUpload/InputUpload';
import classesCSS from './DialogForms.module.css'

const booking = (props) => {
    const websiteList = Website.map((option) => {
        return {
            value: option,
            label: t("dashboard.booking.website." + option),
        }
    });

    const defaultWebsite = {
        value: props.dashboardData?.bookingWebsite,
        label: t("dashboard.booking.website." + props.dashboardData?.bookingWebsite)
    };

    return (
        <React.Fragment>
            <InputMultiselect
                name="bookingWebsite"
                label={t("dashboard.booking.websiteLabel")}
                list={websiteList}
                onChange={props.saveDataOnEvent}
                defaultValue={defaultWebsite} />
            <InputText
                name="bookingUrl"
                before="https://"
                label={t("dashboard.booking.url")}
                style="dashboard"
                defaultValue={props.dashboardData?.bookingUrl}
                onBlur={props.saveDataOnEvent} />
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
                    color1<br />color2
                    </div>
            </div>
        </React.Fragment>
    )
}

export default booking;