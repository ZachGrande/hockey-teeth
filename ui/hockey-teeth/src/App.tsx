import React from 'react';
import logo from './assets/logo.png';
import instagram from './assets/instagram.svg';
import spotify from './assets/spotify.svg';
import apple from './assets/apple-music.svg';
import bandcamp from './assets/bandcamp.svg';
import './App.css';
import {Stack} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Stack className="social" direction="row" spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <a href={"https://www.instagram.com/hockeyteethband/"}
           target="_blank"
           rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href={"https://open.spotify.com/artist/2Flj4MtGAxNIW1Ahutwa37?si=Rzc-IdzeQvGLkFKLytPU_Q/"}
           target="_blank"
           rel="noreferrer">
          <img src={spotify} alt="spotify" />
        </a>
        <a href={"https://music.apple.com/us/artist/hockey-teeth/1529979055"}
           target="_blank"
           rel="noreferrer">
          <img src={apple} alt="apple-music" />
        </a>
        <a href={"https://hockeyteeth1.bandcamp.com/"}
           target="_blank"
           rel="noreferrer">
          <img src={bandcamp} alt="band-camp" />
        </a>
      </Stack>
    </div>
  );
}

export default App;
