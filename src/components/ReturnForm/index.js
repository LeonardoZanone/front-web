import React, { useState, useEffect } from 'react'

export default function ReturnForm({ callback, className, properties, personEmail }) {
    const [body, setBody] = useState({
        Email: personEmail,
        Properties: properties,
        Date: "",
        Image: ""
    });

    useEffect(() => {
        body.Properties = properties;
        setBody(body);
    }, [properties, body]);

    function handleChange(ev) {
        ev.preventDefault();
        body[ev.target.name] = ev.target.value;
        setBody(body);
    }

    function handleClick(ev, decision) {
        ev.preventDefault();
        callback(decision, JSON.stringify(body));
    }

    return (
        <div className={'confirm-delete ' + className}>
            <div className='borrow-label'>Devolver item:</div>
            <div className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" name="Email" value={body.Email} onChange={handleChange} />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Date">Data de empréstimo</label>
                    <input type="date" id="Date" name="Date" onChange={handleChange} />
                </div>
            </div>
            <div className='buttons'>
                <button className='button pure-button-secondary' onClick={ev => handleClick(ev, false)}>Cancelar</button>
                <button className='button pure-button-primary' onClick={ev => handleClick(ev, true)}>Confirmar</button>
            </div>
        </div>
    )
}
