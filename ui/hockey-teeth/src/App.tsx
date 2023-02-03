import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import SocialLinks from "./components/SocialLinks";
import {Link, ThemeProvider, Typography} from "@mui/material";
import theme from './theme/Theme';
import ShowList from "./components/ShowList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Typography variant="h1">Upcoming Shows</Typography>
        <br />
        <ShowList />
        <br />
        <Link variant="h3" color="inherit" href="https://gmail.us5.list-manage.com/subscribe?u=4a374bb0ae22afdfc30d38dce&id=0163152dc3"
           target="_blank"
           rel="noreferrer">Join our mailing list!</Link>
        <br />
        <br />
        <SocialLinks />
      </div>
    </ThemeProvider>
  );
}

export default App;
