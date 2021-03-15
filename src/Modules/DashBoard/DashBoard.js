import React, { useEffect, useState } from 'react';

import { dataToLeftDialog } from './data/dataToLeftDialog'
import { dashboardDataModel } from '../../data/collectedData';
import DashboardDialog from './DashboardDialog/DashboardDialog';

const DashBoard = (props) => {
    let [dashboardData, setDashboardData] = useState(dashboardDataModel);

    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog());
    }, [dashboardData]);

    const saveDataOnEventHandler = (formData) => {
        setDashboardData((oldData) => {
            console.log("Received data [Dashboard.js]:"); // <============================================================= DEL
            console.log(formData); // <============================================================= DEL
            return { ...oldData, ...formData };
        })
    }

    return (
        <React.Fragment>
            <DashboardDialog
                dashboardData={dashboardData}
                onChange={(data) => saveDataOnEventHandler(data)} />
        </React.Fragment>
    )
}

export default DashBoard;