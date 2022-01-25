import React from 'react';
import './App.css';
import Navbar from './Components/NavBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home.js';
import Cards from './Components/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        
        <Routes>
        <Route exact path='./' element={<Home />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
