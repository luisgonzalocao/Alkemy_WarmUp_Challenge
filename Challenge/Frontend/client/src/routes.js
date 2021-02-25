import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//View Components
import Home from './core/home';
import AddPost from './core/addPost';

// Functional components
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/addPost" exact component={AddPost} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;