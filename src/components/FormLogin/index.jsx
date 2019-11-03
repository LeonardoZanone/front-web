import React, { Component } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';

export default function FormLogin() {
    return (
        <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                    <label htmlFor="usuario">Usuario</label>
                    <input id="usuario" type="text" name="usuario" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="senha">Senha</label>
                    <input id="senha" type="password" name="senha" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Login</button>
                </div>
            </form>
        </div>
    );
}