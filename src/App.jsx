import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';

function App() {
  

  return (
    <div>

<div id="container">
      
      <div id="navbar">
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/">Home</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>}/>
        </Routes>
      </div>
    </div>
   
    </div>
  )
}

export default App
