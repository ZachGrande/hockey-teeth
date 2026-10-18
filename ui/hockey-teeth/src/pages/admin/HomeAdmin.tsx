import React from 'react';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import HealthStatus from '../../components/HealthStatus';
import TopTracksChart from '../../components/TopTracksChart';
import ShowForm from '../../components/ShowForm';

function HomeAdmin() {
  const { logout } = useAuth0();
  return (
    <Stack spacing={6} alignItems="stretch">
      <Box>
        <Typography variant="h1" sx={{ fontSize: { xs: 32, sm: 50 } }}>
          ADMIN DASHBOARD
        </Typography>
        <Box sx={{ mt: 3 }}>
          <HealthStatus />
        </Box>
      </Box>
      <ShowForm />
      <TopTracksChart />
      <Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={async () => {
            await signOut(auth).catch((e) => console.error('Firebase sign-out failed', e));
            logout({
              logoutParams: { returnTo: window.location.origin },
            });
          }}
        >
          Log Out
        </Button>
      </Box>
    </Stack>
  );
}

export default HomeAdmin;
