import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  secondary: '#8DB48E',
  primary: '#4D724D',
  accent: '#F4DB7D',
  black: '#000000',
  white: '#ffffff',
  overlay: 'rgba(0, 0, 0, 0.7)',
  darkGray: '#1f0530',
  background: '#F5F5F5',
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
      main: '#f8f8f8',
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'Roboto Condensed',
        fontSize: 20,
      },
      body2: {
        fontFamily: 'Roboto Condensed',
      },
      h1: {
        fontFamily: 'Roboto Slab',
      },
      h2: {
        fontFamily: 'Roboto Slab',
      },
      h3: {
        fontFamily: 'Roboto Slab',
      },
      h4: {
        fontFamily: 'Roboto Slab',
      },
      h5: {
        fontFamily: 'Roboto Slab',
      },
      h6: {
        fontFamily: 'Roboto Slab',
      },
    },
  },
});

export { colors, theme };
