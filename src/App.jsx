import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home.jsx';
import MultiplayerGame from './Pages/MultiplayerGame.jsx';
import KaplayTestSite from './Pages/kaplaySite.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/mpg" element={<MultiplayerGame />} />
                <Route path="/kaplay" element={<KaplayTestSite />} />
            </Routes>
        </Router>
    );
}

export default App;
