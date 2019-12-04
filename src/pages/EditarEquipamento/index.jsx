import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import FormEquipamento from '../../components/FormEquipamento';
import Header from '../../components/Header';
import { get } from '../../apicalls/Equipamento';

export default function EditarEquipamento({ history }) {
    const [equipamento, setEquipamento] = useState({});

    useEffect(() => {
        const items = history.location.pathname.split('/');
        const id = items[items.length - 1];
        async function fetchData() {
            const response = await get(id);
            if (!response) {
                alert('Ocorreu um erro!');
                return;
            }
            if (response.status !== 200 || !response.data || response.data.Status !== 0) {
                alert(response.data.Message);
            }
            setEquipamento(response.data.Content);
        }
        fetchData();
    }, [history]);
    return (<div id="layout">
        <Menu />
        <div id="main">
            <Header titulo="Editar Equipamento"></Header>
            <div className="content content-body" id="content">
                <FormEquipamento preEquipamento={equipamento}></FormEquipamento>
            </div>
        </div>
    </div>
    );
}
