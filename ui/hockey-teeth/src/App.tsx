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
      <h1>Upcoming Shows</h1>
      <div className="show-item">
        <h4>Feb 5, 2023 | Factory Luxe</h4>
        <p>{"Seattle, WA | "}
          <a href="https://www.thefactoryluxe.com/events/hockey-teeth-i90-fiasco-choly?fbclid=PAAaZVlXVZ-pjc-N1vANQXYW
                 7J2uZ5_kHd-ez2jwshJBpT_NvCLNsSnaKyIyE" target="_blank" rel="noreferrer">Tickets</a>
        </p>
      </div>
      <div className="show-item">
        <h4>Feb 24, 2023 | The Blue Room</h4>
        <p>Bellingham, WA</p>
      </div>
      <h3><a href="https://gmail.us5.list-manage.com/subscribe?u=4a374bb0ae22afdfc30d38dce&id=0163152dc3"
             target="_blank"
             rel="noreferrer">Join our mailing list!</a></h3>
      <br />
      <SocialLinks />
    </div>
  );
}

export default App;
