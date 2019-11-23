import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import CadastroPessoa from '../pages/CadastroPessoa';
import CadastroEquipamento from '../pages/CadastroEquipamento';
import ExibirPessoa from '../pages/ExibirPessoa';
import ExibirEquipamento from '../pages/ExibirEquipamento';
import MenuPessoa from '../pages/MenuPessoa';
import MenuEquipamento from '../pages/MenuEquipamento';
import EditarEquipamento from '../pages/EditarEquipamento';
import EditarPessoa from '../pages/EditarPessoa';


export default function Routes() {
    const token = localStorage.getItem('token');

    const PrivateRoute = ({ component: Component, ...rest }) => {
        return (
            <Route {...rest} render={props => (
                token ?
                    <Component {...props} />
                    : <Redirect to="/login" />
            )} />
        );
    };

    const PublicRoute = ({ component: Component, restricted, ...rest }) => {
        return (
            <Route {...rest} render={props => (
                token && restricted ?
                    <Redirect to="/home" />
                    : <Component {...props} />
            )} />
        );
    };

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute restricted={true} component={Login} path="/login" exact />
                <PrivateRoute component={Home} path="/" exact />
                <PrivateRoute component={Home} path="/home" />
                <PrivateRoute path='/menupessoa' component={MenuPessoa} />
                <PrivateRoute path='/menuequipamento' component={MenuEquipamento} />
                <PrivateRoute path='/cadastropessoa' component={CadastroPessoa} />
                <PrivateRoute path='/editarpessoa' component={EditarPessoa} />
                <PrivateRoute path='/cadastroequipamento' component={CadastroEquipamento} />
                <PrivateRoute path='/editarequipamento' component={EditarEquipamento} />
                <PrivateRoute path='/listagempessoa' component={ExibirPessoa} />
                <PrivateRoute path='/listagemequipamento' component={ExibirEquipamento} />
            </Switch>
        </BrowserRouter>
    )
}