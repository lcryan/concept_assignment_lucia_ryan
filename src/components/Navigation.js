import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";


function Navigation() {
    return (
        <>
            <header className="app-header">
                <div className="inner-container">
                    <nav className="navigation-bar">
                        <ul>
                            <li>hottest spots</li>
                            <li>reddit</li>
                            <li>memes</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navigation;
