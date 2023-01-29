import React from 'react';
import logo from './assets/logo.png';
import instagram from './assets/instagram.svg'
import './App.css';
import {Grid} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Grid container className="social" spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Grid item xs={8}>
          <a href={"https://www.instagram.com/hockeyteethband/"}>
            <img src={instagram} alt="instagram" />
            <p>Visit our Instagram</p>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
