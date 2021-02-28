/* 
  This is a base app component that renders all pages as it's children, 
  any components that are persistent between pages should be rendered in this 
  file.
*/

import { makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import 'fontsource-roboto';
import { theme } from '../Theme';
import TopBar from '../components/global/TopBar';
import CustomBackground from '../components/global/CustomBackground';
import ThemeContext from '../context/theme';
import Footer from '../components/global/Footer';

const useStyles = makeStyles(() => ({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
  },

  contentContainer: {
    height: 'fit-content',
    paddingBottom: '3rem',
  },
}));

function MyApp({ Component, pageProps }) {
  const styles = useStyles();
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const windowMode = window.localStorage.getItem('themeMode'); // find theme
    const color = windowMode === 'light' ? '#ffffff' : '#051622'; // determine theme color
    document.body.style.backgroundColor = color; // set background color

    if (windowMode && mode !== windowMode) {
      setMode(windowMode);
    }
  }, [mode]);

  function changeTheme() {
    /* 
      toggles between dark and light mode
    */
    if (mode === 'dark') {
      window.localStorage.setItem('themeMode', 'light');
      setMode('light');
    }

    if (mode === 'light') {
      window.localStorage.setItem('themeMode', 'dark');
      setMode('dark');
    }
  }

  return (
    <ThemeProvider theme={theme(mode)}>
      <ThemeContext.Provider value={{ mode, changeTheme }}>
        <noscript>
          <Typography color="textPrimary">
            It looks like JavaScript has been disabled in your browser. This
            site runs better with JavaScript! consider renabling it to
            experience it as it was intended!
          </Typography>
        </noscript>
        <div className={styles.pageContainer}>
          <CustomBackground />
          <div className={styles.contentContainer}>
            <TopBar />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
