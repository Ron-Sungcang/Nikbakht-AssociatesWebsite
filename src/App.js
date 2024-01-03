import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Landing } from './Landing';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
        <div className="top-bar">
          <div className="top-Icon">
            <Link exact to="/"><button className='home-Icon'><img src={logo} className="App-logo" alt="logo" /></button> </Link>
          </div>

          <div className='top-middle'>
            <h3 className='top-title'>Nikbakht Law</h3>
          </div>

          <div className="top-right">
            <button className='top-buttons'>Contact</button>
          </div>
        </div>
        
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
