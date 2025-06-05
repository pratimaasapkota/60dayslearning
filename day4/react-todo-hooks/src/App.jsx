import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <h1>React Todo App with Theme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>
      {/* Your todo app UI goes here */}
    </div>
  );
}

export default App;