import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import logo from '../assets/logo.svg';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';

function HomeLayout() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          component="img"
          src={logo}
          alt="logo"
          maxWidth="md"
        />
      </header>
      <Container maxWidth="md">
        <MenuBar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
}

export default HomeLayout;
