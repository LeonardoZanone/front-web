import React from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';

export default function FormDevolverEquipamento() {
    return (
        <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                    <label htmlFor="email">Aquisição</label>
                    <input id="email" type="date" name="email" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Devolver</button>
                </div>
            </form>
        </div>
    );
}