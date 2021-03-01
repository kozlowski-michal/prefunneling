import React, { useState } from 'react';

import Header from './Header/Header'
import LeftDialog from '../Modules/LeftDialog/LeftDialog';
import classesCSS from './Layout.module.css';
import Router from '../router.js';

const Layout = () => {
    let [leftDialogProps, setLeftDialogProps] = useState(null);

    const leftDialogPropsHandler = (newLeftDialogProps) => {
        setLeftDialogProps(() => newLeftDialogProps)
    }

    return (
        <React.Fragment>
            <Header />
            <main className={classesCSS.Content}>
                <div className={classesCSS.Container} >
                    <div className={classesCSS.LeftDialog} >
                        <LeftDialog {...leftDialogProps} />
                    </div>
                    <div className={classesCSS.RightDialog} >
                        <Router sendToLeftDialog={leftDialogPropsHandler} />
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Layout;