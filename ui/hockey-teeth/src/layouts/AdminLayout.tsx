import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import logo from '../assets/logo.svg';

function AdminLayout() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
}

export default withAuthenticationRequired(AdminLayout, {
  onRedirecting: () => <div>Loading...</div>,
});
