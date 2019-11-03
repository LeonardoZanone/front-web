import React, { Component, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import FormEquipamento from '../../components/FormEquipamento';
import Header from '../../components/Header';

export default function EditarEquipamento() {
    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Editar Equipamento"></Header>
            <div className="content" id="content">
                <FormEquipamento></FormEquipamento>
            </div>
        </div>
    </div>
    );
}
