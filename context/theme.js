import React from 'react';

const ThemeContext = React.createContext({
  mode: 'dark',
  changeTheme: () => {},
});

export default ThemeContext;
