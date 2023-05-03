import { useState } from 'react'
import './App.css'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {
  const pathname = window.location.pathname;
  switch (pathname) {
    case '/':
      return (
        <div className="App">
         <h1> We did it boys </h1>
        </div>
      )
      break;
    case '/login':
      return (
        <Login></Login>
      )
      break;
    case '/register':
      return (
        <Signup></Signup>
      )
      break;
    default:
      break;
  }

  return (
    <div className="App">
     
    </div>
  )
}

export default App
