import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import SocialLinks from "./components/SocialLinks";
import {ThemeProvider} from "@mui/material";
import theme from './theme/Theme';
import Shows from "./pages/Shows";
import MailingList from "./components/MailingList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Shows />
        <MailingList />
        <br />
        <br />
        <SocialLinks />
      </div>
    </ThemeProvider>
  );
}

export default App;
