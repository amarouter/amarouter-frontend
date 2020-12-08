import React from 'react'

import './Logo.css';
import logo from '../logo.svg';

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" width="50px" height="50px" />
            <p>Amarouter</p>
        </div>
    )
}
