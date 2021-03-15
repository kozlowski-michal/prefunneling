import React, { useState } from 'react';

import Header from './Header/Header'
import LeftDialog from '../Modules/LeftDialog/LeftDialog';
import classesCSS from './Layout.module.css';
import MainRouter from '../mainRouter.js';

const Layout = () => {
    const [leftDialogProps, setLeftDialogProps] = useState(null);

    const leftDialogPropsHandler = (newLeftDialogProps) => {
        setLeftDialogProps(() => newLeftDialogProps)
    }

    return (
        <>
            <Header />
            <main className={classesCSS.Content}>
                <div className={classesCSS.Container} >
                    <div className={classesCSS.LeftDialog} >
                        <LeftDialog {...leftDialogProps} />
                    </div>
                    <div className={classesCSS.RightDialog} >
                        <MainRouter sendToLeftDialog={leftDialogPropsHandler} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout;