import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Questionnaire from './Questionaire/Questionaire';
import DashBoard from './data/DashBoard/DashBoard';

const router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Questionnaire} />
            <Route path="/dashboard" exact component={DashBoard} />
        </Switch>
    )
}

export default router;