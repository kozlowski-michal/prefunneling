import React from 'react';
import { I18n, translate, Translate } from 'react-i18nify';

import { SquareBulletSVG, RoundBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import { Steps } from '../../../data/enums';
import classesCSS from './LeftDialogElements.module.css';
import MarcoImg from '../../../assets/Marco.png';

const leftDialogSummary = (props) => {
    let services = [];
    Object.keys(props.dialogData.servicesNeeded).map((key) => {
        if (props.dialogData.servicesNeeded[key]) services
            .push(<I18n render={() => translate("rightDialog.servicesNeeded." + key)} />)
    })

    if (props.step == Steps.AskForName || props.step == Steps.AskAboutServices)
        return <div className={classesCSS.Marco} >
            <img src={MarcoImg} alt="Marco Dzierma" width="40" height="40" />
            <p className={classesCSS.MarcoSignature} >
                <strong>Marco Dzierma</strong><br />
                <Translate value="leftDialog.MarcoTitle" />
            </p>
        </div>

    /* when changing steps this logic could(?) need to be changed as well, to avoid empty data */
    return <React.Fragment>
        <p className={classesCSS.Selections} >
            <Translate value="leftDialog.selections" />
        </p>

        {services.map((item, index) => {
            return (
                <p key={index} className={classesCSS.ListItem} >
                    <SquareBulletSVG />
                    <span className={classesCSS.ListItemLabel}>{item}</span>
                </p>
            )
        })}

        {props.step > Steps.AskForWebsite ?
            <p className={[classesCSS.ListItem, classesCSS.ListItemMargin].join(' ')} >
                <RoundBulletSVG />
                <span className={classesCSS.ListItemLabel}>
                    <I18n render={() => translate("rightDialog.haveWebsite." + props.dialogData.website)} />
                </span>
            </p> : null}

    </React.Fragment>
}


export default leftDialogSummary;