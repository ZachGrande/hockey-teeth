import React from 'react';
import {
  Grid, Link, useTheme, Box,
} from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

function MenuBar() {
  const theme = useTheme();
  const location = useLocation();
  const menu = [
    {
      title: 'Home',
      route: '/home',
    },
    {
      title: 'Music',
      route: '/music',
    },
    {
      title: 'Videos',
      route: '/videos',
    },
    {
      title: 'Past Shows',
      route: '/past-shows',
    },
    {
      title: 'About',
      route: '/bio',
    },
    {
      title: 'Store',
      route: '/store',
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        rowSpacing={1}
        sx={{
          justifyContent: 'center',
          maxWidth: 'sm',
          mb: 6,
        }}
      >
        {menu.map((data) => (
          <Grid item xs={6} key={data.title}>
            <Link
              to={data.route}
              variant="h3"
              underline="none"
              component={RouterLink}
              color={location.pathname === data.route
                ? theme.palette.text.primary
                : theme.palette.text.secondary}
            >
              {data.title}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MenuBar;
