import {createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F7CDF4"
    },
    secondary: {
      main: "#C1EFF7"
    },
    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: ['Playfair-Display', 'serif'].join(','),
    h1: {
      fontFamily: ['Mansalva', 'serif'].join(',')
    },
    h2: {
      fontFamily: ['Mansalva', 'serif'].join(',')
    },
    h3: {
      fontFamily: ['Mansalva', 'serif'].join(',')
    }
  }
})

export default theme;