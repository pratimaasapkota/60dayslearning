import React, { createContext, useState, useContext } from 'react';

// 1. Create the ThemeContext
const ThemeContext = createContext();

// 2. Create the ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} // <-- No semicolon here

// 3. Custom hook to use ThemeContext
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 4. Export everything
export { ThemeProvider, useTheme };
