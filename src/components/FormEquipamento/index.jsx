import React, { useState, useEffect } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { create } from '../../apicalls/Equipamento';

export default function FormEquipamento({ preEquipamento }) {

    const [equipamento, setEquipamento] = useState({
        ServiceTag: '',
        PropertyNumber: '',
        Description: '',
        Status: '',
        Type: ''
    });

    useEffect(() => {
        if (preEquipamento && preEquipamento !== {}) {
            setEquipamento(preEquipamento);
        }
    }, [preEquipamento]);

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
                    <input id="ServiceTag" defaultValue={equipamento.ServiceTag} onChange={handleChange} type="text" name="ServiceTag" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="PropertyNumber">Número de Patrimonio</label>
                    <input id="PropertyNumber" defaultValue={equipamento.PropertyNumber} onChange={handleChange} type="text" name="PropertyNumber" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Description">Descrição</label>
                    <input id="Description" defaultValue={equipamento.Description} onChange={handleChange} type="text" name="Description" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Type">Tipo</label>
                    <input id="Type" defaultValue={equipamento.Type} onChange={handleChange} type="text" name="Type" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                </div>
            </form>
        </div>
    );
}