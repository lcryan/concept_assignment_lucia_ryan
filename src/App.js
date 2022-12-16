import './index.css'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import Navigation from './components/Navigation'



import NotFound from './pages/notfound/NotFound'
import Home from './pages/home/Home'
import Subreddit from './pages/subreddit/Subreddit'

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
