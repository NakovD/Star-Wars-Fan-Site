import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './Components/PageLayout/PageLayout.js';
import appRoutes from './utils/routes.js';


const Navigation = () => {

    return (
        <Router>
            <PageLayout>
                <Switch>
                    {appRoutes.map(el => (<Route key={el.path} path={el.path} component={el.component} />))}
                </Switch>
            </PageLayout>
        </Router>
    )
}

export default Navigation;