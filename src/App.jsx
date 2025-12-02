import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home.jsx';
import MultiplayerGame from './Pages/MultiplayerGame.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/mpg" element={<MultiplayerGame />} />
            </Routes>
        </Router>
    );
}

export default App;
