import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { create } from '../../apicalls/Person'

export default function FormPessoa({ prePerson }) {

    const [person, setPerson] = useState({
        Id: 0,
        Name: '',
        Email: '',
        RG: '',
        Telephone: ''
    });

    useEffect(() => {
        if (prePerson)
            setPerson(prePerson);
    }, [prePerson, person])


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