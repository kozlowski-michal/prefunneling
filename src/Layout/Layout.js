import React from 'react';
import Header from './Header/Header'
import classesCSS from './Layout.module.css';

const layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <main className = {classesCSS.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default layout;