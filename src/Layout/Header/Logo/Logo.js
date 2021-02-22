import React from 'react';

import classesCSS from './Logo.module.css';
import logoImg from '../../../assets/Logo.png';
import logoMobileImg from '../../../assets/LogoMobile.png';

export const Logo = () => {
    return (
        <div className = {classesCSS.Logo}>
            <img
                src = {logoImg}
                alt = "Logo"
                className = {classesCSS.LogoImg}
            />
        </div>
    )
}

export const LogoMobile = () => {
    return (
        <div className = {classesCSS.LogoMobile}>
            <img
                src = {logoMobileImg}
                alt = "Logo"
                className = {classesCSS.LogoImgMobile}
            />
        </div>
    )
}