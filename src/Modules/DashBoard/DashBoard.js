import React, { useEffect } from 'react';

import { dataToLeftDialog } from './data/dataToLeftDialog'

const DashBoard = (props) => {
    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog());
    }, [])

    return (
        <React.Fragment>
            Dashboard
        </React.Fragment>
    )
}

export default DashBoard;