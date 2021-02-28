/* 
  Hook that handles theme and document background color
*/

import { useEffect, useState } from 'react';

export default function useSetThemeColor() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const windowMode = window.localStorage.getItem('themeMode'); // find theme
    const color = windowMode === 'light' ? '#ffffff' : '#051622'; // determine theme color
    document.body.style.backgroundColor = color; // set background color

    /* 
      if theme is saved and current theme does not match the saved theme set
      correct theme
    */
    if (windowMode && mode !== windowMode) {
      setMode(windowMode); // sets the theme in state
    }
  }, [mode]);
}
