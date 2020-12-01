import { ThemeProvider } from '@material-ui/core';
import { theme } from '../Theme';
import '../styles/globals.scss';
import 'fontsource-roboto';
import TopBar from '../components/global/TopBar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
