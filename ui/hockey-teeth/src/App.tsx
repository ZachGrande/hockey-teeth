import React from 'react';
import logo from './assets/logo.png';
import instagram from './assets/instagram.svg';
import spotify from './assets/spotify.svg';
import apple from './assets/apple-music.svg';
import bandcamp from './assets/bandcamp.svg';
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
          <a href={"https://www.instagram.com/hockeyteethband/"}
             target="_blank"
             rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </Grid>
        <Grid item xs={8}>
          <a href={"https://open.spotify.com/artist/2Flj4MtGAxNIW1Ahutwa37?si=Rzc-IdzeQvGLkFKLytPU_Q/"}
             target="_blank"
             rel="noreferrer">
            <img src={spotify} alt="spotify" />
          </a>
        </Grid>
        <Grid item xs={8}>
          <a href={"https://music.apple.com/us/artist/hockey-teeth/1529979055"}
             target="_blank"
             rel="noreferrer">
            <img src={apple} alt="apple-music" />
          </a>
        </Grid>
        <Grid item xs={8}>
          <a href={"https://hockeyteeth1.bandcamp.com/"}
             target="_blank"
             rel="noreferrer">
            <img src={bandcamp} alt="band-camp" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
