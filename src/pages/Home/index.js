import React, { useState, useEffect } from 'react';
import './layouts.css';
import logo from '../../assets/facens.png'
import profilePic from '../../assets/person.png';

export default function Home() {
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

    return (
        <div className="grid-container">
            <div className="Logo">
                <img src={logo}></img>
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
                <div className="Logout"><button>Logout</button></div>
            </div>
            <div className="Body">
                {people.map((person) =>
                    <div key={person.Id} id={person.Id} className="Card">
                        <div className="Pic">
                            <img src={profilePic}></img>
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
