import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'; 
import MainSection from './components/MainSection'; 


function App() {
  
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <Navbar/>
        <MainSection/>
      </div>
    </>
  )
}

export default App
