import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import "./App.css";
import useStore from '../store';

const App = () => {
  const darkMode = useStore(state => state.darkMode);

  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
