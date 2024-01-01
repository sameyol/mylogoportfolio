import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Graphics from './pages/Graphics';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} /> 
        <Route path="/graphics" element={<Graphics />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);
