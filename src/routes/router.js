import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Home from '../pages/Home/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}