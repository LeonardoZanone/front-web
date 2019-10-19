import React, { useState, useEffect } from 'react';
import './layouts.css';
import logo from '../../assets/facens.png'
import profilePic from '../../assets/person.png';

export default function Home({history}) {
    const [people, setPeople] = useState([]);

    useEffect(() =>
        setPeople([
            {
                Id: 1,
                Name: 'Aff',
                Sobrenome: 'Fonso',
            },
            {
                Id: 2,
                Name: 'Leo',
                Sobrenome: 'Danone',
            },
        ]), []);

    function handleLogout() {
        localStorage.setItem('token', null);
        history.push('/login');
    }  

    return (
        <div className="grid-container">
            <div className="Logo">
                <img alt='Facens Logo' src={logo}></img>
            </div>
            <div className="NavBar">
                <div className="NavItem">
                    <button>Item1</button>
                </div>
                <div className="NavItem">
                    <button>Item1</button>
                </div>
                <div className="NavItem">
                    <button>Item1</button>
                </div>
                <div className="NavItem">
                    <button>Item1</button>
                </div>
                <div className="NavItem">
                    <button>Item1</button>
                </div>
                <div className="NavItem">
                    <button>Item1</button>
                </div>
            </div>
            <div className="Header">
                <div className="Logout"><button onClick={handleLogout}>Logout</button></div>
            </div>
            <div className="Body">
                {people.map((person) =>
                    <div key={person.Id} id={person.Id} className="Card">
                        <div className="Pic">
                            <img alt='Profile' src={profilePic}></img>
                        </div>
                        <div className="Info">
                            <p>{person.Name + ' ' + person.Sobrenome}</p>
                        </div>
                        <div className="SeeMore">
                            <button>See More</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
