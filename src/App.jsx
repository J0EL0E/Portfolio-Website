import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Introduction from './pages/Introduction';

import "./assets/App.css"


function App() {
 
  return (
      <div className='container' >
          <Navbar/>
          <Introduction />
          <Profile />  
          <Projects />
          <Contact/>
      </div>
    );
}

export default App
