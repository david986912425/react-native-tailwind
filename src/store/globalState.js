import { useState } from 'react';

export const useGlobalState = () => {
  const [globalTheme, setGlobalTheme] = useState('light'); // Inicialmente, configurado como 'light'

  const toggleTheme = () => {
    setGlobalTheme(globalTheme === 'light' ? 'dark' : 'light');
  };

  return { globalTheme, toggleTheme };
};
