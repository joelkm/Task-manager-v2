import { useState } from 'react'
import { Route } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {
  

  return (
    <div className="App">
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </div>
  )
}

export default App
