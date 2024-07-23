import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { NavProvider } from './components/NavContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="/my-portfolio">
    <NavProvider>
      <App />
    </NavProvider>
  </Router>
)
