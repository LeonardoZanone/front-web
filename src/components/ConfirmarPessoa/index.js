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
        <div className={'confirm-pessoa ' + className}>
            Esse e-mail já existe porém está inativo, deseja reativá-lo com esses novos dados?
            <div className='buttons'>]
                <button className='button pure-button pure-button-secondary' onClick={ev => handleClick(ev, false)}>Cancelar</button>
                <button className='button pure-button pure-button-primary' onClick={ev => handleClick(ev, true)}>Confirmar</button>
            </div>
        </div>
    )
}
