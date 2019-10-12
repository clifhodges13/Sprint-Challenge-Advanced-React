import React from 'react';
import Players from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';
import DarkModeButton from './components/DarkModeButton';

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDarkMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <div data-testid="app-test-id" className={darkMode ? "App light-mode" : "App dark-mode"}>
      <DarkModeButton toggleDarkMode={toggleDarkMode} />
      <Players />
    </div>
  );
}

export default App;
