import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { list } from '../../apicalls/History';

export default function ShowHistory() {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await list();
            setHistory(response.data.Content);
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
                        <th>Patrimonio</th>
                        <th>Service Tag</th>
                        <th>Data</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(function (item) {
                            return (
                                <tr key={item.Id}>
                                    <td>{item.Person.Name}</td>
                                    <td>{item.Person.Email}</td>
                                    <td>{item.Transactions[0].Property.Description}</td>
                                    <td>{item.Transactions[0].Property.ServiceTag}</td>
                                    <td>{new Date(item.Transactions[0].Date).toLocaleDateString('ca')}</td>
                                    <td>{item.Transactions[0].Type === 0 ? 'Empréstimo' : 'Devolução'}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}