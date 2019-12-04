import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import FormEquipamento from '../../components/FormEquipamento';
import Header from '../../components/Header';

export default function CadastroEquipamento() {
    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Cadastro de Equipamento"></Header>
            <div className="content content-body" id="content">
                <FormEquipamento></FormEquipamento>
            </div>
        </div>
    </div>
    );
}
