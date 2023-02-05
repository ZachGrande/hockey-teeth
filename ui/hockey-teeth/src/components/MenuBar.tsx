import React from 'react';
import {Grid, Link, useTheme} from "@mui/material";
import {useLocation, Link as RouterLink} from "react-router-dom";

function MenuBar() {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Grid container rowSpacing={1} justifyContent="center" columns={{ xs: 4, sm: 8, md: 12}}
    sx={{marginBottom: theme.spacing(2)}}>
      <Grid item xs={6}>
        <Link to="/home"
              variant="h3"
              underline={"none"}
              component={RouterLink}
              color={location.pathname === "/home" ?
                                  theme.palette.text.primary :
                                  theme.palette.text.secondary}>
          Home
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/videos"
              variant="h3"
              underline={"none"}
              component={RouterLink}
              color={location.pathname === "/videos" ?
                theme.palette.text.primary :
                theme.palette.text.secondary}>
          Videos
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/past-shows"
              variant="h3"
              underline={"none"}
              component={RouterLink}
              color={location.pathname === "/past-shows" ?
                theme.palette.text.primary :
                theme.palette.text.secondary}>
          Past Shows
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/news"
              variant="h3"
              underline={"none"}
              component={RouterLink}
              color={location.pathname === "/news" ?
                theme.palette.text.primary :
                theme.palette.text.secondary}>
          In The News
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/bio"
              variant="h3"
              underline={"none"}
              component={RouterLink}
              color={location.pathname === "/bio" ?
                theme.palette.text.primary :
                theme.palette.text.secondary}>
          Bio
        </Link>
      </Grid>
    </Grid>
  );
}

export default MenuBar;
