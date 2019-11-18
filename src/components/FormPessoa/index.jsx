import React, { useState } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { create } from '../../apicalls/Person'

export default function FormPessoa() {

    const [person, setPerson] = useState({
        Name: '',
        Email: '',
        RG: '',
        Telephone: ''
    });

    async function salvarPessoa(e) {
        e.preventDefault();
        console.log(person);
        const response = await create(person);
        alert(response.data.Message);
    }

    function handleChange(ev) {
        ev.preventDefault();
        person[ev.target.name] = ev.target.value;
        setPerson(person);
    }

    return (
        <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned" onSubmit={salvarPessoa}>
                <div className="pure-control-group">
                    <label htmlFor="Name">Nome</label>
                    <input onChange={handleChange} id="Name" type="text" name="Name" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Email">Email</label>
                    <input onChange={handleChange} id="Email" type="email" name="Email" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="RG">RG</label>
                    <input onChange={handleChange} id="RG" type="text" name="RG" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Telephone">Telefone</label>
                    <input onChange={handleChange} id="Telephone" type="text" name="Telephone" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                </div>
            </form>
        </div>
    );
}