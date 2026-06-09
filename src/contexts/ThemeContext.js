import React, { createContext, useState } from 'react';
import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(themeData.theme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Track if the intro loader has completely finished its animation
  const [isIntroFinished, setIsIntroFinished] = useState(() => {
    return !!sessionStorage.getItem('introSeen');
  });

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { theme, setTheme, drawerOpen, setHandleDrawer, isIntroFinished, setIsIntroFinished };
  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
