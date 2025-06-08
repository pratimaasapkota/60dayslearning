import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Counter from './components/Counter';
import ThemeToggle from './components/ThemeToggle';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  };

  return (
    <div style={appStyle}>
      <h1>React Hooks Example</h1>
      <ThemeToggle />
      <Counter />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
