import React, { useState } from 'react'
import './App.css'
import Characters from './components/Characters';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className="App">
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header/>
      <button
        className={darkMode ? 'button-dark' : 'button-light'}
        onClick={ handleClick }>{darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Characters/>
      </div>
    </div>
  );
}

export default App;
