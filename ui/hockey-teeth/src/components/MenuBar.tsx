import React from 'react';
import { Grid, Link, useTheme } from '@mui/material';
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
      title: 'Videos',
      route: '/videos',
    },
    {
      title: 'Past Shows',
      route: '/past-shows',
    },
    {
      title: 'In The News',
      route: '/news',
    },
    {
      title: 'Bio',
      route: '/bio',
    },
    {
      title: 'Music',
      route: '/music',
    },
  ];

  return (
    <Grid
      container
      rowSpacing={1}
      justifyContent="center"
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ marginBottom: theme.spacing(8) }}
    >
      {menu.map((data, key) => (
        <Grid item xs={6} key={key}>
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
  );
}

export default MenuBar;
