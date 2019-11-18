import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import EquipamentoHub from '../../components/EquipamentoHub';

export default function MenuPessoa() {
    return (
        <div id="layout">
            <Menu></Menu>
            <div id="main">
                <Header titulo="HUB Esquipamento"></Header>
                <div className="content" id="content">
                    <EquipamentoHub></EquipamentoHub>
                </div>
            </div>
        </div>
    );
}
