import React from 'react';
import { I18n, Translate } from 'react-i18nify';

export const dataToLeftDialog = () => {
    return {
        title:
            <I18n render={() =>
                <Translate value={"leftDialog.dashboard.title"} />
            } />,
        message:
            <I18n render={() =>
                <Translate value={"leftDialog.dashboard.message"} />
            } />,
        marco: true,
    }
}