import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  pimary: '#81c784',
  black: '#000000',
  white: '#ffffff',
  darkOverlay: 'rgba(0, 0, 0, 0.7)',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.pimary,
    },
  },
});

export { colors, theme };
