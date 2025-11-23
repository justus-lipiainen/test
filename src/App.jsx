import { useState, useEffect } from 'react'; // Added useEffect to the import
import './App.css';
import "./components/NavBar";
import NavBar from './components/NavBar';
import Card from './components/Card.jsx';
import TodayMenu from './components/TodaysFood.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Card />
      <TodayMenu />
    </>
  );
}

export default App;
