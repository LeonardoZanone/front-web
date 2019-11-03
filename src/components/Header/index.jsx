import React, { Component } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';

export default function Header({titulo}) {
    return (
        <div className="header">
            <h1>{titulo}</h1>
        </div>
    );
}
