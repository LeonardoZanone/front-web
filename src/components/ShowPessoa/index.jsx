import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { Link } from 'react-router-dom';
import { list } from '../../apicalls/Person'

export default function ShowPessoa() {

    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await list();
            if (!response) {
                alert('Ocorreu um erro!');
                return;
            }
            if (response.status !== 200 || !response.data || response.data.Status !== 0) {
                alert(response.data.Message);
            }
            setPessoas(response.data.Content);
        }
        fetchData();
    }, []);

    return (
        <div>
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>RG</th>
                        <th>Telefone</th>
                        <th>Editar</th>
                        <th>Equipamentos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pessoas.map(function (pessoa) {
                            return (
                                <tr key={pessoa.Id}>
                                    <td>{pessoa.Name}</td>
                                    <td>{pessoa.Email}</td>
                                    <td>{pessoa.RG}</td>
                                    <td>{pessoa.Telephone}</td>
                                    <td><Link to={`/editarpessoa/${pessoa.Id}`}>Editar</Link></td>
                                    <td><Link to="#">Devolver</Link></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}