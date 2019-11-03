import React, { Component, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import PessoaHub from '../../components/PessoaHub';

export default function MenuPessoa() {
    return (
    <div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="HUB Pessoa"></Header>
            <div className="content" id="content">
                <PessoaHub></PessoaHub>
            </div>
        </div>
    </div>
    );
}
