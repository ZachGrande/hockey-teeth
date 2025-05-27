import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container, Box, AppBar, Toolbar,
} from '@mui/material';
import logo from '../assets/logo.svg';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';

function HomeLayout() {
  return (
    <div className="App">
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ bgcolor: 'transparent' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              height: '150px',
              width: '375px',
              pointerEvents: 'none',
            }}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <MenuBar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
}

export default HomeLayout;
