import React from 'react';
import Players from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDarkMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "App" : "dark-mode"}>
      <button onClick={e => toggleDarkMode(e)}>Toggle Dark Mode</button>
      <Players />
    </div>
  );
}

export default App;
