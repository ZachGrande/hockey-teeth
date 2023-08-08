import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';

function HomeLayout() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
