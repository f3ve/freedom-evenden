import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  // pimary: '#00c8ff',
  primary: '#00ffb7',
  secondary: '#0048ff',
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
  },
});

export { colors, theme };
