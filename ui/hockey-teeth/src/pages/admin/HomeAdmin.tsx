import React from 'react';
import { Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import HealthStatus from '../../components/HealthStatus';

function HomeAdmin() {
  const { logout } = useAuth0();
  return (
    <>
      <Typography variant="h1">
        ADMIN DASHBOARD
      </Typography>
      <HealthStatus />
      <button
        type="button"
        onClick={() => logout({
          logoutParams: { returnTo: window.location.origin },
        })}
      >
        Log Out
      </button>
    </>
  );
}

export default HomeAdmin;
