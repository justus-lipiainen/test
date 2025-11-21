import { useState, useEffect } from 'react'; // Added useEffect to the import
import './App.css';
import "./components/NavBar";
import NavBar from './components/NavBar';
import Card from './components/Card.jsx';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/scrape?url=https://aromimenu.cgisaas.fi/VantaaAromieMenus/FI/Default/Vantti/Sotunkil/Page/Restaurant') // Your target URL
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Fetch error:', err)); // Added error handling
  }, []);

  return (
    <>
      <NavBar />
      <Card />
      <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
    </>
  );
}

export default App;
