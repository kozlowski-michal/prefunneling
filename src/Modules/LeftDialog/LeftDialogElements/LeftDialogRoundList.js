import React from 'react';

import { RoundBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import classesCSS from './LeftDialogElements.module.css';

const leftDialogRoundList = (props) => (
    props.list.map((item, index) => {
        return (
            <p key={index} className={classesCSS.ListItem} >
                <RoundBulletSVG />
                <span className={classesCSS.ListItemLabel}>{item}</span>
            </p>
        )
    })
)

export default leftDialogRoundList;