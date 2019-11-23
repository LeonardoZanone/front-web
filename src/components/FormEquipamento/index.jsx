import React, { useState } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { create } from '../../apicalls/Equipamento';

export default function FormEquipamento() {

    const [equipamento, setEquipamento] = useState({
        ServiceTag: '',
        Description: '',
        Status: 'Available',
        Type: ''
    });

    function handleChange(e) {
        e.preventDefault();
        equipamento[e.target.name] = e.target.value;
        setEquipamento(equipamento);
    }

    async function criarEquipamento() {
        const response = await create(equipamento);
        if (!response || response.status !== 200) {
            alert('Ocorreu um erro!');
        }
        alert(response.data.Message);
    }

    return (
        <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned" onSubmit={criarEquipamento}>
                <div className="pure-control-group">
                    <label htmlFor="ServiceTag">Service Tag</label>
                    <input id="ServiceTag" onChange={handleChange} type="text" name="ServiceTag" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Description">Descrição</label>
                    <input id="Description" onChange={handleChange} type="text" name="Description" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Type">Tipo</label>
                    <input id="Type" onChange={handleChange} type="text" name="Type" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                </div>
            </form>
        </div>
    );
}