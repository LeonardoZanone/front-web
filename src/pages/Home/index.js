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
                Name: 'Affonso Brian',
                Sobrenome: 'Pereira Azevedo',
            },
            {
                Id: 2,
                Name: 'Leonardo',
                Sobrenome: 'Zanone',
            },
            {
                Id: 1,
                Name: 'Lucas Senne',
                Sobrenome: 'Moura Leite',
            },
            {
                Id: 1,
                Name: 'André',
                Sobrenome: 'Breda',
            },
            {
                Id: 1,
                Name: 'Glauco',
                Sobrenome: 'Todesco',
            },
            {
                Id: 1,
                Name: 'Ana',
                Sobrenome: 'Luisa',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },{
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            },
            {
                Id: 1,
                Name: 'João',
                Sobrenome: 'Vitor',
            }
        ]), []);

    return (
        <div className="grid-container">
            <div className="Logo">
                <img src={logo}></img>
            </div>
            <div className="NavBar">
                <div className="NavItem">
                    <button>Cadastro de Pessoas</button>
                </div>
                <div className="NavItem">
                    <button>Cadastro de Patrimonio</button>
                </div>
                <div className="NavItem">
                    <button>Consulta de Pessoas</button>
                </div>
                <div className="NavItem">
                    <button>Consulta de Patrimonio</button>
                </div>
                <div className="NavItem">
                    <button>Cadastro de Usuário</button>
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
                            <button>+ Informações</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
