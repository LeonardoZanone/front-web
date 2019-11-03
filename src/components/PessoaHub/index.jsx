import React, { Component, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import './style.css';
import { Link } from 'react-router-dom';

export default function PessoaHub() {
    return (
        <div className="red-square">
            <div className="pure-control-group">
                <label></label>
                <Link to='/listagempessoa' className="pure-menu-link">Exibir Pessoas</Link>
                <label></label>
                <Link to='/cadastropessoa' className="pure-menu-link">Cadastrar Pessoas</Link>
            </div>
        </div>
    );
}



