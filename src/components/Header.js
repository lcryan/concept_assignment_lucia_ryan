import React from 'react';
import './Header.css'

function Header({nameOfListItem1, nameOfListItem2, nameOfListItem3, image, imageDescription, pageTitle, pageSubtitle}) {
    return (
        <div>

                <article className="header">
                    <div className="inner-container">
                        <nav className="navigation-bar">
                            <ul>
                                <li>{nameOfListItem1}</li>
                                <li>{nameOfListItem2}</li>
                                <li>{nameOfListItem3}</li>
                            </ul>
                        </nav>
                        <article className="image-title">
                        <img src={image} alt={imageDescription} className="page-image"/>
                        </article>
                        <h1 className="page-title">{pageTitle}</h1>
                        <p className="page-subtitle">{pageSubtitle}</p>

                    </div>
                </article>

        </div>
    );
}

export default Header;