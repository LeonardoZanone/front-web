import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login/index';
import Home from '../pages/Home/index';

export default function Routes() {
    const token = localStorage.getItem('token');

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            token !== 'null'
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
      )

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute  path='/home' component={Home}/>
                <PrivateRoute  path='/' exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}