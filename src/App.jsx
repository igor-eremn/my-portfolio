import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import { useNav } from './components/NavContext';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience.jsx';
import Reference from './pages/Reference.jsx';
 
function App() {
  const { selectedItem } = useNav();

  return (
    <div className="App">
      <Navbar className="Navbar"/>
      <div className="Content">
        {selectedItem === 'home'  && <Home />}
        {selectedItem === 'about' && <About />}
        {selectedItem === 'exp'   && <Experience />}
        {selectedItem === 'ref'   && <Reference />}
      </div>
    </div>
  )
}

export default App
