import './index.css'
import './App.css'
import Logo from './assets/logo.png'
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from 'react-router-dom'

function App() {
    return (


        <>
            <Routes>
                <Route path="/" element={<Home/>}/>

            </Routes>


            <header className="app-header">
                <div className="inner-container">
                    <nav className="navigation-bar">
                        <ul>
                            <li>
                                <uppercase>hottest spots</uppercase>
                            </li>
                            <li>nav item 1</li>
                            <li>nav item 1</li>
                        </ul>
                    </nav>

                    <img src={Logo} id="logo-image" alt='reddit-logo'/>
                    <h1>Reddit</h1>

                </div>


            </header>
        </>
    );
}

export default App;
