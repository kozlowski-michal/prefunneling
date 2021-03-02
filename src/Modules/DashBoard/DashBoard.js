import React, { useEffect, useState } from 'react';

import { dataToLeftDialog } from './data/dataToLeftDialog'
import { dashboardDataModel } from '../../data/collectedData';
import DashboardDialog from './DashboardDialog/DashboardDialog';

const DashBoard = (props) => {
    let [dashboardData, setDashboardData] = useState(dashboardDataModel);

    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog());
        console.log(dashboardData);  // <============================================================= DEL
    }, [dashboardData])

    const saveDataOnEventHandler = (formData) => {
        setDashboardData((oldData) => {
            console.log("data from event:");
            console.log(formData);
            /*if (formData.servicesNeeded) { // deep merging
                formData = { servicesNeeded: { ...oldDialogData.servicesNeeded, ...formData.servicesNeeded } }
            }
            if (formData.offer) { // deep merging
                formData = { offer: { ...oldDialogData.offer, ...formData.offer } }
            }
            formData['language'] = getLocale();*/
            return { ...oldData, ...formData };
        });
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