import React, { useState } from 'react';

import Header from './Header/Header'
import LeftDialog from '../Modules/LeftDialog/LeftDialog';
import classesCSS from './Layout.module.css';
import Router from '../router.js';

const Layout = (props) => {

    /*** testowe dane ***/
    let leftData = {
        marco: false,
        title: "Some title",
        message: "Some text",
        listTitle: "List title",
        squareList: [],
        roundList: ["sdfsdfsdfd"],
    }

    let [leftDialogProps, setLeftDialogProps] = useState(null);

    const leftDialogPropsHandler = (newLeftDialogProps) => {
        console.log(newLeftDialogProps);
        console.log("newLeftDialogProps");
        setLeftDialogProps(() => {
            return newLeftDialogProps;
        })
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