import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const logo = new URL('../assets/logo.svg', import.meta.url).href;

function AdminLayout() {
  return (
    <div className="App">
      <Box component="header" sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            height: '150px',
            width: '375px',
            maxWidth: '100%',
            pointerEvents: 'none',
          }}
        />
      </Box>
      <Container maxWidth="md" sx={{ pb: 10 }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default withAuthenticationRequired(AdminLayout, {
  onRedirecting: () => <div>Loading...</div>,
});
