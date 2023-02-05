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
      primary: "#8C1A6A",
      secondary: "#000000",
    }
  },
  spacing: 4,
  typography: {
    fontSize: 12,
    fontFamily: ['Playfair-Display', 'serif'].join(','),
    h1: {
      fontFamily: ['Mansalva', 'serif'].join(','),
      fontSize: 60
    },
    h2: {
      fontFamily: ['Mansalva', 'serif'].join(',')
    },
    h3: {
      fontFamily: ['Mansalva', 'serif'].join(','),
      fontSize: 30
    }
  }
})

export default theme;