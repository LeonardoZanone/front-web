import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { Link } from 'react-router-dom';
import { list, deleta } from '../../apicalls/Equipamento';
import { borrow, devolver } from '../../apicalls/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faUserTag, faUndo } from '@fortawesome/free-solid-svg-icons';
import ConfirmarDelecao from '../ConfirmarDelecao/index';
import BorrowForm from '../BorrowForm/index';
import ReturnForm from '../ReturnForm/index';

export default function ShowEquimaneto({ person }) {
    const [patrimonios, setPatrimonios] = useState([]);
    const [hidden, setHidden] = useState('hidden');
    const [hiddenBorrow, setHiddenBorrow] = useState('hidden');
    const [hiddenReturn, setHiddenReturn] = useState('hidden');
    const [selected, setSelected] = useState(0);
    const [borrowSelected, setBorrowSelected] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await list(person);
            if (response && response.data)
                setPatrimonios(response.data.Content);
        }
        fetchData();
    }, [person]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function Delete() {
        const response = await deleta(selected);
        if (response.status === 200) {
            alert(response.data.Message);
        }
    }

    function handleDelete(ev, id) {
        ev.preventDefault();
        setSelected(id);
        setHidden('');
        setHiddenBorrow('hidden');
        setHiddenReturn('hidden');
    }

    function deleteCallback(decision) {
        if (decision)
            Delete();
        setHidden('hidden');
    }

    async function Borrow(body) {
        const response = await borrow(body);
        alert(response.data.Message);
    }

    function handleBorrow(ev, id) {
        ev.preventDefault();
        setBorrowSelected(id);
        setHiddenBorrow('');
        setHidden('hidden');
        setHiddenReturn('hidden');
    }

    function borrowCallback(decision, bodyReturn) {
        if (decision) {
            Borrow(bodyReturn);
        }
        setHiddenBorrow('hidden');
    }

    function handleReturn(ev, id) {
        ev.preventDefault();
        setBorrowSelected(id);
        setHiddenReturn('');
        setHidden('hidden');
        setHiddenBorrow('hidden');
    }

    const returnCallback = (decision, bodyReturn) => {
        if (decision) {
            Devolver(bodyReturn);
        }
        setHiddenReturn('hidden');
    }

    async function Devolver(bodyReturn) {
        const response = await devolver(bodyReturn);
        alert(response.data.Message);
    }

    return (
        <div>
            <ConfirmarDelecao callback={deleteCallback} className={hidden} />
            <BorrowForm callback={borrowCallback} className={hiddenBorrow} properties={[borrowSelected]} />
            <ReturnForm callback={returnCallback} className={hiddenReturn} properties={[borrowSelected]} />
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Service Tag</th>
                        <th>Numero de Patrimonio</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Descrição</th>
                        <th>Acões</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patrimonios.map(function (patrimonio) {
                            return (
                                <tr key={patrimonio.Id}>
                                    <td>{patrimonio.ServiceTag}</td>
                                    <td>{patrimonio.PropertyNumber}</td>
                                    <td>{patrimonio.Type}</td>
                                    {patrimonio.Status === 'Emprestado' ? <td>{patrimonio.Person.Name}</td> : <td>{patrimonio.Status}</td>}
                                    <td>{patrimonio.Description}</td>
                                    <td>
                                        <Link className='tooltip edit-icon' to={`/editarequipamento/${patrimonio.Id}`}>
                                            <FontAwesomeIcon icon={faEdit} />
                                            <span className="tooltiptext">Editar</span>
                                        </Link>
                                        {patrimonio.Status === 'Disponível' ?
                                            <Link className='tooltip borrow-icon' to='/' onClick={ev => handleBorrow(ev, patrimonio.Id)}>
                                                <FontAwesomeIcon icon={faUserTag} />
                                                <span className="tooltiptext">Emprestar</span>
                                            </Link> :
                                            <Link className='tooltip return-icon' to='/' onClick={ev => handleReturn(ev, patrimonio.Id)}>
                                                <FontAwesomeIcon icon={faUndo} />
                                                <span className="tooltiptext">Devolver</span>
                                            </Link>
                                        }
                                        <Link className='tooltip delete-icon' to='/' onClick={ev => handleDelete(ev, patrimonio.Id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                            <span className="tooltiptext">Deletar</span>
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