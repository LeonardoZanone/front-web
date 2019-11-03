import React, { Component, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import FormPessoa from '../../components/FormPessoa';

export default function EditarPessoa() {
    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Editar Pessoa"></Header>
            <div className="content" id="content">
                <FormPessoa></FormPessoa>
            </div>
        </div>
    </div>
    );
}
