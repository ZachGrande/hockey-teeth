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
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 50
    },
    h2: {
      fontFamily: ['Montserrat', 'sans-serif'].join(',')
    },
    h3: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 30
    },
    h4: {
      fontFamily: ['Playfair-Display', 'serif'].join(','),
      fontSize: 20
    },
    h5: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 20
    },
    h6: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 10
    },
  }
})

export default theme;