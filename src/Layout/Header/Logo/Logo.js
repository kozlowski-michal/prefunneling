import React from 'react';

import classesCSS from './Logo.module.css';
import { LogoSVG, LogoMobileSVG } from '../../../data/svg/Logo'

export const Logo = () => {
    return (
        <div className = {classesCSS.Logo}>
            <LogoSVG/>
        </div>
    )
}

export const LogoMobile = () => {
    return (
        <div className = {classesCSS.LogoMobile}>
            <LogoMobileSVG/>
        </div>
    )
}