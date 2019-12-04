import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import ShowPessoa from '../../components/ShowPessoa';
import Header from '../../components/Header';

export default function ExibirPessoa() {
    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Listagem de Pessoa"></Header>
            <div className="content content-table" id="content">
                <ShowPessoa></ShowPessoa>
            </div>
        </div>
    </div>
    );
}
