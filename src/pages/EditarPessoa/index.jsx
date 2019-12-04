import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import FormPessoa from '../../components/FormPessoa';
import { get } from '../../apicalls/Person';

export default function EditarPessoa({ history }) {
    const [person, setPerson] = useState({});

    useEffect(() => {
        const items = history.location.pathname.split('/');
        const id = items[items.length - 1];
        async function fetchData() {
            const response = await get(id);
            setPerson(response.data.Content);
        }
        fetchData();
    }, [history]);

    return (<div id="layout">
        <Menu></Menu>
        <div id="main">
            <Header titulo="Editar Pessoa"></Header>
            <div className="content content-body" id="content">
                <FormPessoa prePerson={person}></FormPessoa>
            </div>
        </div>
    </div>
    );
}
