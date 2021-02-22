import React from 'react';
import { I18n, getLocale, setLocale } from 'react-i18nify';

import { Logo, LogoMobile } from './Logo/Logo';
import classesCSS from './Header.module.css';

const header = () => {
    return (
        <nav className = {classesCSS.Toolbar} >
            {/* Desktop */}
            <div className = {classesCSS.NavContainer} >
                <Logo />
                <a>Overview</a>
                <a>Solutions</a>
                <a>Case studies</a>
                <div className = {classesCSS.LeftSeparator}></div>
                <a>Company & More</a>
                <a>Contact</a>
                <a className = {classesCSS.Phone} >+49 (0)30 920 385 4012</a>
            </div>
            
            <div className = {classesCSS.NavContainer} >
                <div className = {classesCSS.Shadow}></div>
                <I18n render = {() => 
                    getLocale() == 'de' ?
                        <div className = {classesCSS.RightItem} onClick = {() => setLocale('en')} > 
                            <div className = {classesCSS.IconPlaceholder} >
                                <img 
                                    src = "https://preview.redd.it/fimwru2gj3011.png?auto=webp&s=2893f03df490c710fba8ff3f78669ca101c5c865"
                                    style = {{width: "24px", height: "24px"}} />
                            </div>
                            Region 
                        </div> :
                        <div className = {classesCSS.RightItem} onClick = {() => setLocale('de')} > 
                            <div className = {classesCSS.IconPlaceholder} >
                                <img 
                                    src = "https://i.pinimg.com/474x/e9/c9/63/e9c9638398640c5e3f2567400ae51da4.jpg"
                                    style = {{width: "24px", height: "24px"}} />
                            </div>
                            Region 
                        </div>
                } />
                <div className = {classesCSS.RightSeparator}></div>
                <div className = {classesCSS.RightItem} >
                    <div className = {classesCSS.IconPlaceholder} ></div>
                    Download
                </div>
                <div className = {classesCSS.RightSeparator}></div>
                <div className = {classesCSS.RightItem} >
                    <div className = {classesCSS.IconPlaceholder} ></div>
                    Create
                </div>
                <div className = {classesCSS.RightSeparator}></div>
                <div className = {classesCSS.RightItem} >
                    <div className = {classesCSS.IconPlaceholder} ></div>
                    Login
                </div>
            </div>
            {/* Mobile */}
            <div className = {classesCSS.ItemMobile} >
                <LogoMobile />
            </div>
            <div className = {classesCSS.ItemMobile} >
                <a className = {classesCSS.Phone} >+49 (0)30 920 385 4012</a>
            </div>
            <div className = {classesCSS.ItemMobile} >
                menu
            </div>
        </nav>
    )
}

export default header;