import React, { Component, useState } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { Link } from 'react-router-dom';

export default function ShowPessoa() {
    const [pessoas, setPessoas] = useState([{"id": 1, "nome": "affonso", "sobrenome": "brian", "email": "contato.affonsobrian@gmail.com", "rg": "15.13.12.12-8"}]);
    return (
        <div>
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>RG</th>
                        <th>Editar</th>
                        <th>Equipamentos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pessoas.map(function (pessoa) {
                            return (
                                <tr>
                                    <td>{pessoa.nome}</td>
                                    <td>{pessoa.sobrenome}</td>
                                    <td>{pessoa.email}</td>
                                    <td>{pessoa.rg}</td>
                                    <td><Link to={`/editarpessoa/${pessoa.id}`}>Editar</Link></td>
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