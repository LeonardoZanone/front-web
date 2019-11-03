import React, { Component, useState } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { Link } from 'react-router-dom';

export default function ShowEquimanetoEmprestado(){
    const [patrimonios, setPatrimonios] = useState([{"property_number": "846486213", "type": "Computer", "status": "fodido","service_tag": "44GE55GE9", "description": "Um computer bão demais sô", "email": "contato.affonsobrian@gmail.com", "rg": "15.13.12.12-8"}]);
    return (
        <div>
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Service Tag</th>
                        <th>Numero de Patrimonio</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Descrição</th>
                        <th>Devolver</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patrimonios.map(function (patrimonio) {
                            return (
                                <tr>
                                    <td>{patrimonio.service_tag}</td>
                                    <td>{patrimonio.property_number}</td>
                                    <td>{patrimonio.type}</td>
                                    <td>{patrimonio.status}</td>
                                    <td>{patrimonio.description}</td>
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