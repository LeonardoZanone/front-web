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
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            <Component {...props} />
        )} />
      )

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path='/login' component={Login} />
                <PrivateRoute  path='/home' component={Home}/>
                <PrivateRoute  path='/' exact component={Home}/>
                <PrivateRoute  path='/menupessoa' component={MenuPessoa}/>
                <PrivateRoute  path='/menuequipamento' component={MenuEquipamento}/>
                <PrivateRoute  path='/cadastropessoa' component={CadastroPessoa}/>
                <PrivateRoute  path='/editarpessoa' component={EditarPessoa}/>
                <PrivateRoute  path='/cadastroequipamento' component={CadastroEquipamento}/>
                <PrivateRoute  path='/editarequipamento' component={EditarEquipamento}/>
                <PrivateRoute  path='/listagempessoa' component={ExibirPessoa}/>
                <PrivateRoute  path='/listagemequipamento' component={ExibirEquipamento}/>
            </Switch>
        </BrowserRouter>
    )
}