import React from 'react';
import { Translate } from 'react-i18nify';

import { RoundBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import classesCSS from './LeftDialogElements.module.css';

const leftDialogRoundList = (props) => (
    props.list.map((item, index) => {
        return (
            <p key={index} className={classesCSS.ListItem} >
                <RoundBulletSVG />
                <span className={classesCSS.ListItemLabel}>
                    <Translate value={"rightDialog.haveWebsite." + item} />
                </span>
            </p>
        )
    })
)

export default leftDialogRoundList;