import React, { useEffect, useState } from 'react';

import { dataToLeftDialog } from './data/dataToLeftDialog'
import { dashboardDataModel } from '../../data/collectedData';
import DashboardDialog from './DashboardDialog/DashboardDialog';

const DashBoard = (props) => {
    const [dashboardData, setDashboardData] = useState(dashboardDataModel);

    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog());
        console.log("Collected data [Modules/Dashboard/Dashboard.js]:"); // <============================================================= DEL
        console.log(dashboardData); // <============================================================= DEL
    }, [dashboardData]);

    const handleChange = (formData) => {
        setDashboardData((oldData) => {
            console.log("Received data [Modules/Dashboard/Dashboard.js]:"); // <============================================================= DEL
            console.log(formData); // <============================================================= DEL
            return { ...oldData, ...formData };
        })
    }

    return (
        <>
            <DashboardDialog
                dashboardData={dashboardData}
                onChange={(data) => handleChange(data)} />
        </>
    )
}

export default DashBoard;