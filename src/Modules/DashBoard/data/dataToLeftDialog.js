import React from 'react';
import { Translate } from 'react-i18nify';

export const dataToLeftDialog = () => {
    return {
        title: <Translate value={"leftDialog.dashboard.title"} />,
        message: <Translate value={"leftDialog.dashboard.message"} />,
        marco: true,
    }
}