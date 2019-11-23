import React, { useEffect } from 'react';
import './styles.css';

export default function ConfirmarDelecao({ callback, className }) {
    useEffect(() => {
        localStorage.setItem('confirmation', '');
    }, [])

    function handleClick(ev, decision) {
        ev.preventDefault();
        callback(decision);
    }

    return (
        <div className={'confirm-delete ' + className}>
            Você tem certeza que deseja deletar este item?
            <div className='buttons'>
                <button className='button button-yes' onClick={ev => handleClick(ev, true)}>Sim</button>
                <button className='button button-no' onClick={ev => handleClick(ev, false)}>Não</button>
            </div>
        </div>
    )
}
