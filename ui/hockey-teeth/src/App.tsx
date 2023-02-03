import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import SocialLinks from "./components/SocialLinks";
import {Link, ThemeProvider, Typography} from "@mui/material";
import theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Typography variant="h1">Upcoming Shows</Typography>
        <br />
        <div className="show-item">
          <Typography variant="h4">Feb 5, 2023 | Factory Luxe</Typography>
          <Typography variant="body1">{"Seattle, WA | "}
            <Link variant="body1" color="inherit" href="https://www.thefactoryluxe.com/events/hockey-teeth-i90-fiasco-choly?fbclid=PAAaZVlXVZ-pjc-N1vANQXYW
                   7J2uZ5_kHd-ez2jwshJBpT_NvCLNsSnaKyIyE" target="_blank" rel="noreferrer">Tickets</Link>
          </Typography>
        </div>
        <br />
        <div className="show-item">
          <Typography variant="h4">Feb 24, 2023 | The Blue Room</Typography>
          <Typography variant="body1">Bellingham, WA</Typography>
        </div>
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
