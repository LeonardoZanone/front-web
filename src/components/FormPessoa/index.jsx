import React, { Component } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';

export default function FormPessoa() {
    return (
        <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" name="name" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="rg">RG</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input id="telefone" type="text" name="telefone" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                </div>
            </form>
        </div>
    );
}