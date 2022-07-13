/**
 *
 * All the theme colors typography and mui components can be modify from here.
 *
 */

const { createTheme } = require('@mui/material');
const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#222222',
      dark: '#000000',
      light: '#494949',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f4b721',
      dark: '#bd8800',
      light: '#ffe95a',
      contrastText: '#222222',
    },
    info: {
      main: '#2959b3',
    },
    text: {
      primary: '#222222',
      secondary: '#f4b721',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    button: {
      fontWeight: 600,
    },
    allVariants: {
      fontSize: '14px',
    },
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.7rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
      styleOverrides: {
        containedSecondary: {
          fontWeight: 700,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          '&.Mui-error': {
            fontSize: '12px',
            marginLeft: 0,
          },
        },
      },
    },
  },
});

export default theme;
