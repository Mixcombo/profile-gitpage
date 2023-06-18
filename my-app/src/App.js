import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Profile from './page/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? 'dark' : 'light';
  const themeClass2 = darkMode ? 'light' : 'dark';

  return (
      <div>
        <BrowserRouter>
          <div className={`navbar ${themeClass2}`}>
            <Navbar />
            <div className="theme-switch" onClick={toggleTheme}>
                {darkMode ? 'Light' : 'Dark'}
            </div>
          </div>

          <div className={`${themeClass}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>

        </BrowserRouter>
      </div>
  );
}

export default App;