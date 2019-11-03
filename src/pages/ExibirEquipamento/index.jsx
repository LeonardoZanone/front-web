import React, { Component, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import ShowEquimaneto from '../../components/ShowEquipamento';

export default function ExibirEquipamento() {
    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Listagem de Equipamentos"></Header>
            <div className="content" id="content">
                <ShowEquimaneto></ShowEquimaneto>
            </div>
        </div>
    </div>
    );
}
