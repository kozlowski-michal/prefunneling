import React, { useEffect, useState } from 'react';

import { dataToLeftDialog } from './data/dataToLeftDialog'
import { dashboardDataModel } from '../../data/collectedData';
import DashboardDialog from './DashboardDialog/DashboardDialog';

const DashBoard = (props) => {
    const [dashboardData, setDashboardData] = useState(dashboardDataModel);

    useEffect(() => {
        props.sendToLeftDialog(dataToLeftDialog());
    }, []); // fill array with: dashboardData variable if data to left dialog could change

    const handleChange = (formData) => {
        setDashboardData((oldData) => {
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