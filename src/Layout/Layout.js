import React from 'react';
import Header from './Header/Header'
import classesCSS from './Layout.module.css';

const layout = (props) => {
    return (
        <React.Fragment>
            <Header 
                chooseLanguage = {props.chooseLanguage}
                language = {props.language}
            />
            <main className = {classesCSS.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default layout;