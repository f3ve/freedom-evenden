import { ThemeProvider } from '@material-ui/core';
import { theme } from '../Theme';
import '../styles/globals.scss';
import 'fontsource-roboto';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
