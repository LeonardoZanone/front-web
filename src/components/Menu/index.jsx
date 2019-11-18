import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div id="menu">
            <div className="pure-menu">
                <Link to='/home' className="pure-menu-heading">Facens</Link>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><Link to='/home' className="pure-menu-link">Início</Link></li>
                    <li className="pure-menu-item"><Link to='/menupessoa' className="pure-menu-link">Pessoa</Link></li>
                    <li className="pure-menu-item"><Link to='/menuequipamento' className="pure-menu-link">Equipamento</Link></li>
                </ul>
            </div>
        </div>
    );
}