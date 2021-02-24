import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//View Components
import Home from './core/home';

// Functional components
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;