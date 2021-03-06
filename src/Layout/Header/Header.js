import React from 'react';
import { getLocale, setLocale } from 'react-i18nify';
import { NavLink } from 'react-router-dom';

import { Logo, LogoMobile } from './Logo/Logo';
import { LoginSVG, CreateSVG, DownloadSVG, EnUsSVG, DeDeSVG } from '../../data/svg/HeaderIcons';
import classesCSS from './Header.module.css';

const header = () => {
    return (
        <nav className={classesCSS.Toolbar} >
            {/* Desktop */}
            <div className={classesCSS.NavContainer} >
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <a>Overview</a>
                <a>Solutions</a>
                <a>Case studies</a>
                <div className={classesCSS.LeftSeparator} />
                <a>Company & More</a>
                <a>Contact</a>
                <a className={classesCSS.Phone} >+49 (0)30 920 385 4012</a>
            </div>

            <div className={classesCSS.NavContainer} >
                <div className={classesCSS.Shadow} />
                {getLocale() === 'de' ?
                    <div className={classesCSS.RightItem} onClick={() => setLocale('en')} >
                        <DeDeSVG />
                            Region
                        </div> :
                    <div className={classesCSS.RightItem} onClick={() => setLocale('de')} >
                        <EnUsSVG />
                            Region
                        </div>}
                <div className={classesCSS.RightSeparator} />
                <div className={classesCSS.RightItem} >
                    <DownloadSVG />
                    Download
                </div>
                <div className={classesCSS.RightSeparator} />
                <NavLink to="/create" className={classesCSS.RightItem}>
                    <CreateSVG />
                        Create
                </NavLink>
                <div className={classesCSS.RightSeparator} />
                <a className={classesCSS.RightItem} >
                    <LoginSVG />
                    Login
                </a>
            </div>

            {/* Mobile */}
            <div className={classesCSS.ItemMobile} >
                <LogoMobile />
            </div>
            <div className={classesCSS.ItemMobile} >
                <a className={classesCSS.Phone} >+49 (0)30 920 385 4012</a>
            </div>
            <div className={[classesCSS.ItemMobile, classesCSS.MenuItem].join(' ')} >
                <div className={classesCSS.MenuItemRow} />
                <div className={classesCSS.MenuItemRow} />
                <div className={classesCSS.MenuItemRow} />
            </div>
        </nav>
    )
}

export default header;