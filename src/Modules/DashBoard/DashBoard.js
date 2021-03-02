import React, { useEffect, useState } from 'react';

import { dataToLeftDialog } from './data/dataToLeftDialog'
import { dashboardDataModel } from '../../data/collectedData';
import DashboardDialog from './DashboardDialog/DashboardDialog';

const DashBoard = (props) => {
    let [dashboardData, setDashboardData] = useState(dashboardDataModel);

    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog());
        console.log(dashboardData);  // <============================================================= DEL\
    }, [dashboardData]);

    const saveDataOnEventHandler = (component, formData) => {
        setDashboardData((oldData) => {
            switch (component) {
                case "customer":
                    let customer = { ...oldData.customer, ...formData }
                    return { ...oldData, ...customer };
            }
        })
    }

    return (
        <React.Fragment>
            <DashboardDialog
                dashboardData={dashboardData}
                saveDataOnEvent={(component, data) => saveDataOnEventHandler(component, data)} />
        </React.Fragment>
    )
}

export default DashBoard;