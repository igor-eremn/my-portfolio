import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { NavProvider } from './components/NavContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NavProvider>
    <App />
  </NavProvider>,
)
