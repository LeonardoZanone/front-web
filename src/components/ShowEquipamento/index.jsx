import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { Link } from 'react-router-dom';
import { list } from '../../apicalls/Equipamento';

export default function ShowEquimaneto() {
    const [patrimonios, setPatrimonios] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await list();
            setPatrimonios(response.data.Content);
        }
        fetchData();
    }, []);

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
                        <th>Editar</th>
                        <th>Emprestar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patrimonios.map(function (patrimonio) {
                            return (
                                <tr>
                                    <td>{patrimonio.ServiceTag}</td>
                                    <td>{patrimonio.PropertyName}</td>
                                    <td>{patrimonio.Type}</td>
                                    <td>{patrimonio.Status}</td>
                                    <td>{patrimonio.Description}</td>
                                    <td><Link to={`/editarequipamento/${patrimonio.id}`}>Editar</Link></td>
                                    <td><Link to="#">Emprestar</Link></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}