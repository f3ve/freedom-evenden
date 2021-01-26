import { ThemeProvider, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import 'fontsource-roboto';
import { theme } from '../Theme';
import TopBar from '../components/global/TopBar';
import CustomBackground from '../components/global/CustomBackground';
import ThemeContext from '../context/theme';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const windowMode = window.localStorage.getItem('themeMode');
    const color = windowMode === 'light' ? '#ffffff' : '#051622';
    document.body.style.backgroundColor = color;

    if (windowMode && mode !== windowMode) {
      setMode(windowMode);
    }
  }, [mode]);

  function changeTheme() {
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
        <CustomBackground />
        <TopBar />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
