/* 
  Context for easily setting and changing theme from different components
*/

import React from 'react';

const ThemeContext = React.createContext({
  mode: 'dark',
  changeTheme: () => {},
});

export default ThemeContext;
