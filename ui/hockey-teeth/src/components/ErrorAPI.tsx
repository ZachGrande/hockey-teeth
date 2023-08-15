import { Alert, Container, AlertTitle } from '@mui/material';
import React from 'react';

function ErrorAPI() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: '25px',
      }}
    >
      <Alert severity="error">
        <AlertTitle>Oops!</AlertTitle>
        Something went wrong.
      </Alert>
    </Container>
  );
}

export default ErrorAPI;
