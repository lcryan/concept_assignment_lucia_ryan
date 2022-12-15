import './index.css'
import './App.css'
import Logo from './assets/logo.png'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
    return (


        <>



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

                    {/*<Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>*/}






                    <img src={Logo} id="logo-image" alt='reddit-logo'/>
                    <h1>Reddit</h1>

                </div>


            </header>
        </>
    );
}

export default App;
