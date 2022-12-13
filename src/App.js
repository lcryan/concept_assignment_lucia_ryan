import './index.css'
import './App.css'
import Logo from './assets/logo.png'

function App() {
    return (

        <>
            <header className="app-header">

                <div className="inner-container">
                    <nav>
                        <ul>
                            <li>nav item 1</li>
                            <li>nav item 1</li>
                            <li>nav item 1</li>
                        </ul>

                        <img src={Logo} alt='reddit-logo'/>
                        <h1>Reddit</h1>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default App;
