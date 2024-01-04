import logo from './scale-logo.png';
import PLogo from './phone-logo.png';
import MLogo from './mail-logo.png';
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
            <button className='top-buttons'>Our Team</button>
            <button className='top-buttons'>Practice Areas</button>
            <button className='top-buttons'>Blog/News</button>
            <Link to="/contact"><button className='top-buttons'>Contact Us</button></Link>
          </div>
        </div>
        
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className='bottom-Body'>
          <div className='bottom-Top'>
          <div className='bottom-Logo'>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            </div>
                <div className='bottom-Align'>
                    <div className='bottom-Left'>
                      <div className='bottom-Very-Left'>
                      <h3 className='font_Bottom-Smaller'>Nikhbakht Associates Inc is a Saskatchewan based Advocacy 
                      firm focusing on the challenges you face! We are delighted to help those who require assistance
                       in the jurisdiction of Saskatchewan with their needs. We help you in matters that mean the most when 
                       you need it the most!</h3>
                       <div className='contact-Contacts'>
                                <div className='contact-Align'>
                                    <img src={PLogo} className='bot-Icon' alt='PLogo'></img>
                                    <h1 className='font_Bottom-Smaller'> Phone # placeholder </h1>
                                </div>
                                <div className='contact-Align'>
                                    <img src={MLogo} className='bot-Icon' alt='MLogo'></img>
                                    <h1 className='font_Bottom-Smaller'> codennik95@gmail.com</h1>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className='bottom-Separator'></div>
                    <div className='bottom-Middle'>
                        <h1 className='bottom-Header'> Services   </h1>
                        <h3 className='font_Bottom-Smaller'>Traffic Tickets</h3>
                        <h3 className='font_Bottom-Smaller'>Small Claims</h3>
                        <h3 className='font_Bottom-Smaller'>Summary Criminal Offenses</h3>
                    </div>
                    <div className='bottom-Right'>
                        <h1 className='bottom-Header'>  Company  </h1>
                        <h1 className='font_Bottom-Smaller'>About Us</h1>
                        <h1 className='font_Bottom-Smaller'>Our Services</h1>
                        <h1 className='font_Bottom-Smaller'>Blog / News</h1>
                        <h1 className='font_Bottom-Smaller'>Contact Us</h1>
                    </div>
                </div>
            </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
