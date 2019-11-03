import React, { Component, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import FormPessoa from '../../components/FormPessoa';
import ShowPessoa from '../../components/ShowPessoa';
import ShowEquimaneto from '../../components/ShowEquipamento';
import Header from '../../components/Header';
import FormEquipamento from '../../components/FormEquipamento';
import FormLogin from '../../components/FormLogin';

export default function Home() {
    return (
    <div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Bem vindo"></Header>
            <div className="content" id="content">
            </div>
        </div>
    </div>
    );
}
