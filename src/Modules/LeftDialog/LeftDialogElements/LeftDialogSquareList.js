import React from 'react';

import { SquareBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import classesCSS from './LeftDialogElements.module.css';

const leftDialogSquareList = (props) => (
    props.list.map((item, index) => {
        return (
            <p key={index} className={classesCSS.ListItem} >
                <SquareBulletSVG />
                <span className={classesCSS.ListItemLabel}>{item}</span>
            </p>
        )
    })
)

export default leftDialogSquareList;