import React, { Component } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';

export default function FormEquipamento() {
    return (
        <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                    <label htmlFor="equipamento">Equipamento</label>
                    <input id="equipamento" type="text" name="equipamento" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="tipo">Tipo</label>
                    <input id="tipo" type="email" name="tipo" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="aquisicao">Aquisição</label>
                    <input id="aquisicao" type="date" name="aquisicao" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                </div>
            </form>
        </div>
    );
}