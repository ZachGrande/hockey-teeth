import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SocialLinks />
    </div>
  );
}

export default App;
