import React from 'react';

function Header() {
    return (
        <div>
            <header className="app-header">
                <div className="inner-container">
                    <nav className="navigation-bar">
                        <ul>
                            <li>hottest posts</li>
                            <li>reddit</li>
                            <li>memes</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;