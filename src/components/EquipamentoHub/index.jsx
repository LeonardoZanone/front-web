import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import './style.css';
import { Link } from 'react-router-dom';

export default function EquipamentoHub() {
    return (
        <div className="red-square">
            <div className="pure-control-group">
                <label></label>
                <Link to='/listagemequipamento' className="pure-menu-link">Exibir Equipamentos</Link>
                <label></label>
                <Link to='/cadastroequipamento' className="pure-menu-link">Cadastrar Equipamentos</Link>
            </div>
        </div>
    );
}



