import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { create, edit, checkEmail } from '../../apicalls/Person';
import ConfirmarPessoa from '../ConfirmarPessoa/index';

export default function FormPessoa({ prePerson }) {

    const [person, setPerson] = useState({
        Id: 0,
        Name: '',
        Email: '',
        RG: '',
        Telephone: ''
    });
    const [hidden, setHidden] = useState('');

    useEffect(() => {
        setHidden('hidden');
    }, [])

    useEffect(() => {
        if (prePerson)
            setPerson(prePerson);
    }, [prePerson, person])


    function salvarPessoa(e) {
        e.preventDefault();
        if (!prePerson) {
            checkemail();
        }
        else {
            sendRequest();
        }
    }

    async function sendRequest() {
        const response = await create(person);
        alert(response.data.Message);
    }

    async function sendEditRequest() {
        const response = await edit(person);
        alert(response.data.Message);
    }

    async function checkemail() {
        const response = await checkEmail(person.Email);
        if (response && response.data) {
            if (!response.data.Content && response.data.Status === 0) {
                setHidden('');
            }
            else if (!response.data.Content) {
                sendRequest();
            }
            else {
                setHidden('hidden');
                sendEditRequest(person);
            }
        }
    }

    function handleChange(ev) {
        ev.preventDefault();
        person[ev.target.name] = ev.target.value;
        setPerson(person);
    }

    const confirmCallback = (decision) => {
        if (decision) {

        }
        setHidden('hidden');
    }

    return (
        <div className="pure-form pure-form-aligned">
            <ConfirmarPessoa callback={confirmCallback} className={hidden} />
            <form className="pure-form pure-form-aligned" onSubmit={salvarPessoa}>
                <div className="pure-control-group">
                    <label htmlFor="Name">Nome</label>
                    <input defaultValue={person.Name} onChange={handleChange} id="Name" type="text" name="Name" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Email">Email</label>
                    <input defaultValue={person.Email} onChange={handleChange} id="Email" type="email" name="Email" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="RG">RG</label>
                    <input defaultValue={person.RG} onChange={handleChange} id="RG" type="text" name="RG" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Telephone">Telefone</label>
                    <input defaultValue={person.Telephone} onChange={handleChange} id="Telephone" type="text" name="Telephone" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                </div>
            </form>
        </div>
    );
}