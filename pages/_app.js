import { ThemeProvider, Typography } from '@material-ui/core';
import { CookiesProvider } from 'react-cookie';
import { theme } from '../Theme';
import '../styles/globals.css';
import 'fontsource-roboto';
import TopBar from '../components/global/TopBar';
import CustomBackground from '../components/global/CustomBackground';

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <noscript>
          <Typography color="textPrimary">
            It looks like JavaScript has been disabled in your browser. This
            site runs better with JavaScript! consider renabling it to
            experience it as it was intended!
          </Typography>
        </noscript>
        <CustomBackground />
        <TopBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default MyApp;
