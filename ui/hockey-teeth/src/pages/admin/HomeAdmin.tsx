import React from 'react';
import { Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import HealthStatus from '../../components/HealthStatus';
import TopTracksChart from '../../components/TopTracksChart';
import ShowForm from '../../components/ShowForm';

function HomeAdmin() {
  const { logout } = useAuth0();
  return (
    <>
      <Typography variant="h1">
        ADMIN DASHBOARD
      </Typography>
      <HealthStatus />
      <br />
      <ShowForm />
      <br />
      <TopTracksChart />
      <br />
      <button
        type="button"
        onClick={async () => {
          await signOut(auth).catch((e) => console.error('Firebase sign-out failed', e));
          logout({
            logoutParams: { returnTo: window.location.origin },
          });
        }}
      >
        Log Out
      </button>
    </>
  );
}

export default HomeAdmin;
