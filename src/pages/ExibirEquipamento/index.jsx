import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import ShowEquimaneto from '../../components/ShowEquipamento';

export default function ExibirEquipamento({ history }) {
    const [person, setPerson] = useState(0);

    useEffect(() => {
        const items = history.location.pathname.split('/');
        const id = parseInt(items[items.length - 1]);
        setPerson(id);
    }, [history]);

    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Listagem de Equipamentos"></Header>
            <div className="content" id="content">
                <ShowEquimaneto person={person}></ShowEquimaneto>
            </div>
        </div>
    </div>
    );
}
