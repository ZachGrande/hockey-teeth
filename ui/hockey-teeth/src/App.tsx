import React from 'react';
import logo from './assets/logo.png';
import instagram from './assets/instagram.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="social">
        <a href={"https://www.instagram.com/hockeyteethband/"}>
          <img src={instagram} alt="instagram" />
          Visit our Instagram
        </a>
      </div>
    </div>
  );
}

export default App;
