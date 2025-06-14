import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F7CDF4',
      light: '#F7CDF499',
    },
    secondary: {
      main: '#C1EFF7',
    },
    text: {
      primary: '#FC6363',
      secondary: '#000000',
    },
  },
  spacing: 4,
  typography: {
    fontSize: 12,
    fontFamily: ['Montserrat', 'serif'].join(','),
    h1: {
      fontFamily: ['Libre Baskerville', 'sans-serif'].join(','),
      fontSize: 50,
    },
    h2: {
      fontFamily: ['Libre Baskerville', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Libre Baskerville', 'sans-serif'].join(','),
      fontSize: 30,
    },
    h4: {
      fontFamily: ['Libre Baskerville', 'serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Libre Baskerville', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h6: {
      fontFamily: ['Libre Baskerville', 'sans-serif'].join(','),
      fontSize: 10,
    },
  },
});

export default theme;
