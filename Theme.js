import { createMuiTheme } from '@material-ui/core/styles';

// const colors = {
//   secondary: '#deb992',
//   primary: '#1ba098',
//   accent: '#F4DB7D',
//   black: '#000000',
//   white: '#ffffff',
//   overlay: 'rgba(0, 0, 0, 0.7)',
//   darkGray: '#1f0530',
//   background: '#051622',
// };

function theme(mode) {
  return createMuiTheme({
    palette: {
      type: mode || 'dark',
      primary: {
        main: '#1ba098',
      },
      secondary: {
        main: '#deb992',
      },
      black: {
        main: '000000',
      },
      white: {
        main: '#ffffff',
      },
      accent: {
        main: '#F4DB7D',
      },
      overlay: {
        main: 'rgba(0, 0, 0, 0.7)',
      },
      darkGray: {
        main: '#1f0530',
      },
      background: {
        main: '#051622',
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
}

function changeTheme(mode) {
  window.localStorage.setItem('mode', mode);
}

export { theme, changeTheme };
