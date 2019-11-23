import React, { useState, useEffect } from 'react';
import './styles.css';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { list } from '../../apicalls/Person';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTimes, faUserEdit, faLaptop } from '@fortawesome/free-solid-svg-icons'

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
                        <th>Ações</th>
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
                                    <td>
                                        <Link className='tooltip edit-icon' to={`/editarpessoa/${pessoa.Id}`}>
                                            <FontAwesomeIcon icon={faUserEdit} />
                                            <span className="tooltiptext">Editar</span>
                                        </Link>
                                        <Link className='tooltip delete-icon' to={`/deletarpessoa/${pessoa.Id}`}>
                                            <FontAwesomeIcon icon={faUserTimes} />
                                            <span className="tooltiptext">Deletar</span>
                                        </Link>
                                        <Link className='tooltip laptop-icon' to={`/listagemequipamento/${pessoa.Id}`}>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <span className="tooltiptext">Patrimônios</span>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}