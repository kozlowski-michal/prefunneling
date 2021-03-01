import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Questionnaire from './Modules/Questionaire/Questionaire';
import DashBoard from './Modules/DashBoard/DashBoard';

const router = () => {
    return (
        <Switch>
            <Route path="/create" exact component={Questionnaire} />
            <Route path="/" exact component={DashBoard} />
        </Switch>
    )
}

export default router;