import { useState } from 'react'
import { Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {
  

  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/login" component={Login} />
    </div>
  )
}

export default App
