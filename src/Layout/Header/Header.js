import React from 'react';
import { setLocale } from 'react-i18nify';

import classesCSS from './Header.module.css';

const header = () => {
    return (
        <nav className = {classesCSS.Toolbar} >
            <div className = {classesCSS.NavContainer} >
                <div className = {classesCSS.Logo} >
                    <strong>Logo</strong>
                </div>
                <a>Overviev</a>
                <a>Solutions</a>
                <a>Case studies</a>
                <a>Company & more</a>
                <a>Contact</a>
                <a>+49 (0)30 920 385 4012</a>
            </div>
            <div className = {classesCSS.NavContainer} >
                <a>Languages:</a>
                <img 
                    src = "https://i.pinimg.com/474x/e9/c9/63/e9c9638398640c5e3f2567400ae51da4.jpg"
                    style = {{width: "60px", height: "60px", margin: "0 10px", padding: 0}}
                    onClick = {() => setLocale('en')}
                />
                <img 
                    src = "https://preview.redd.it/fimwru2gj3011.png?auto=webp&s=2893f03df490c710fba8ff3f78669ca101c5c865"
                    style = {{width: "60px", height: "60px", margin: "0 10px", padding: 0}}
                    onClick = {() => setLocale('de')} 
                />
                <a>Download</a>
                <a>Create</a>
                <a>Login</a>
            </div>
        </nav>
    )
}

export default header;