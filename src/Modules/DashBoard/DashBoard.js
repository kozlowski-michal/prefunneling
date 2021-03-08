import React, { useEffect, useState } from 'react';

import { dataToLeftDialog } from './data/dataToLeftDialog'
import { dashboardDataModel } from '../../data/collectedData';
import DashboardDialog from './DashboardDialog/DashboardDialog';

const DashBoard = (props) => {
    let [dashboardData, setDashboardData] = useState(dashboardDataModel);

    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog());
        console.log("Collected data:");  // <============================================================= DEL
        console.log(dashboardData);  // <============================================================= DEL
    }, [dashboardData]);

    const saveDataOnEventHandler = (formData) => {
        setDashboardData((oldData) => {
            console.log("Received data:"); // <============================================================= DEL
            console.log(formData); // <============================================================= DEL
            return { ...oldData, ...formData };
        })
    }

    return (
        <React.Fragment>
            <DashboardDialog
                dashboardData={dashboardData}
                saveDataOnEvent={(data) => saveDataOnEventHandler(data)} />
        </React.Fragment>
    )
}

export default DashBoard;