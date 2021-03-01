import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Questionnaire from './Modules/Questionaire/Questionaire';
import DashBoard from './Modules/DashBoard/DashBoard';


const router = (props) => {
    return (
        <Switch>
            <Route
                path="/create"
                exact
                render={() => (
                    <Questionnaire {...props} />
                )} />
            <Route
                path="/"
                exact
                render={() => (
                    <DashBoard {...props} />
                )} />
        </Switch>
    )
}

export default router;