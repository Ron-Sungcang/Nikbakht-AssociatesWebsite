import logo from './scale-logo.png';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Landing } from './Landing';
import { Contact } from './Contact';

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
          <Link exact to="/"><button className='home-Icon'><h3 className='top-title'>Nikbakht Law Inc.</h3></button> </Link>
          </div>

          <div className="top-right">
            <Link to="/contact"><button className='top-buttons'>Contact Us</button></Link>
          </div>
        </div>
        
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className='bottom-Body'>
          <div className='bottom-Logo'>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
                <div className='bottom-Align'>
                    <div className='bottom-Left'>

                    </div>
                    <div className='bottom-Separator'></div>
                    <div className='bottom-Middle'>
                        <h1 className='bottom-Header'> Services   </h1>
                    </div>
                    <div className='bottom-Right'>
                        <h1 className='bottom-Header'>  Company  </h1>
                    </div>
                </div>
            </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
