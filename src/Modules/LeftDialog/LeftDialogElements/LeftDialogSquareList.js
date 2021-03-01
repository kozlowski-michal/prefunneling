import React from 'react';
import { Translate } from 'react-i18nify';

import { SquareBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import classesCSS from './LeftDialogElements.module.css';

const leftDialogSquareList = (props) => (
    props.list.map((item, index) => {
        return (
            <p key={index} className={classesCSS.ListItem} >
                <SquareBulletSVG />
                <span className={classesCSS.ListItemLabel}>
                    <Translate value={"rightDialog.servicesNeeded." + item} />
                </span>
            </p>
        )
    })
)

export default leftDialogSquareList;