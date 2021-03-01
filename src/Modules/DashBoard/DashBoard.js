import React, { useEffect } from 'react';

const DashBoard = (props) => {
    useEffect(() => {
        props.sendToLeftDialog({
            title: "dashboard.title",
            message: "dashboard.message",
            marco: true,
        });
    }, [])

    return (
        <React.Fragment>
            Dashboard
        </React.Fragment>
    )
}

export default DashBoard;