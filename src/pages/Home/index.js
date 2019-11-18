import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

export default function Home() {
    return (
        <div id="layout">
            <Menu></Menu>
            <div id="main">
                <Header titulo="Bem vindo"></Header>
                <div className="content" id="content">
                </div>
            </div>
        </div>
    );
}
