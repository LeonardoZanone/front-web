import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import ShowHistory from '../../components/ShowHistory/index';

export default function ExibirEquipamento() {
    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Listagem de Equipamentos"></Header>
            <div className="content content-table" id="content">
                <ShowHistory></ShowHistory>
            </div>
        </div>
    </div>
    );
}