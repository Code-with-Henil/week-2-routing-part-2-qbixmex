import { createTheme } from '@mui/material/styles';
import { blue, orange, purple, red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[400],
    },
    secondary: {
      main: blue.A400,
      dark: blue['400'],
      light: blue['400'],
    },
    warning: {
      main: orange.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;