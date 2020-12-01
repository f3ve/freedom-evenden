import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#00ff95',
  secondary: '#5c6bc0',
  black: '#000000',
  white: '#ffffff',
  overlay: 'rgba(0, 0, 0, 0.7)',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    black: {
      main: colors.black,
    },
    white: {
      main: '#ffffff',
    },
  },
});

export { colors, theme };
