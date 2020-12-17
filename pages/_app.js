import { Collapse, Slide, ThemeProvider } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from '../Theme';
import '../styles/globals.scss';
import 'fontsource-roboto';
import TopBar from '../components/global/TopBar';
import CustomBackground from '../components/global/CustomBackground';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Component {...pageProps} />
      <CustomBackground />
    </ThemeProvider>
  );
}

export default MyApp;
