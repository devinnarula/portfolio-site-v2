import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import About from './pages/about';

function App() {
  return (
      <Router>
        <About/>
      </Router>
  );
}

export default App;
