import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Footer from '../components/Footer';
import SiteHeader from '../components/SiteHeader';

function HomeLayout() {
  return (
    <div className="App">
      <SiteHeader />
      <Container maxWidth="md" component="main" sx={{ px: { xs: 4, sm: 6 } }}>
        <Outlet />
      </Container>
      <Container maxWidth="md" sx={{ px: { xs: 4, sm: 6 } }}>
        <Footer />
      </Container>
    </div>
  );
}

export default HomeLayout;
