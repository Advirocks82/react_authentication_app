import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import './App.css';  // Import a CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="app-title">My Application</h1>
          <div className="nav-links">
            <Link to="/registration" className="nav-link">Dashboard</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
