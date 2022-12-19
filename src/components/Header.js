import React from 'react';
import './Header.css'

function Header({nameOfListItem1, nameOfListItem2, nameOfListItem3, image, imageDescription, pageTitle}) {
    return (
        <div>
            <header>
                <article className="header">
                    <div className="inner-container">
                        <nav className="navigation-bar">
                            <ul>
                                <li>{nameOfListItem1}</li>
                                <li>{nameOfListItem2}</li>
                                <li>{nameOfListItem3}</li>
                            </ul>
                        </nav>
                        <img src={image} alt={imageDescription} className="page-image"/>
                        <h1 className="page-title">{pageTitle}</h1>
                    </div>
                </article>
            </header>
        </div>
    );
}

export default Header;