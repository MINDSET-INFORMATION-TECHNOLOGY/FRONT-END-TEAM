
// App.jsx
// Add routing for Create Account page
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studentdashboard from './student components/studentdashboard';
import CreateAccount from './student components/CreateAccount';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Studentdashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
