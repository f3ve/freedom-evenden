import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#ff6a3d',
  secondary: '#f4db7d',
  accent: '#ff6a3d',
  accent2: '#f4db7d',
  background: '#1a2238',
  black: '#000000',
  white: '#ffffff',
  overlay: 'rgba(0, 0, 0, 0.7)',
  darkGray: '#1f0530',
};

const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
      main: '#f8f8f8',
    },
  },
  overrides: {
    MuiCard: {
      root: {},
    },
  },
});

export { colors, theme };
