import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import "./App.css";
import useStore from '../store';

const App = () => {
  const darkMode = useStore(state => state.darkMode);
  const {setDarkMode} = useStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className='flex p-4 justify-center items-center'>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
      <HomePage />
    </div>
  );
};

export default App;