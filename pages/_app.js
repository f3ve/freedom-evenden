import { ThemeProvider } from '@material-ui/core';
import { theme } from '../Theme';
import '../styles/globals.scss';
import 'fontsource-roboto';
import TopBar from '../components/global/TopBar';
import CustomBackground from '../components/global/CustomBackground';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CustomBackground />
      <TopBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
