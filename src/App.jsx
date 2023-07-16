import React from 'react'
import { useState } from 'react'

//------------------  componentes------------------------------------//
import Navbar from './Components/Navbar/Navbar'
import Presentation from './Components/Presentation/Presentation'
import About from './Components/About/About'
import Portfolio from './Components/My-Portfolio/My-Portfolio'
import Contact from './Components/Contact/Contact'

//------------------- imagenes---------------------------------------//
import foto from "../src/Images/Foto_con_fondo.png"
import curriculum from "../src/Images/curriculum.png"

//------------------- CSS General------------------------------------//
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="general_content">
      <Navbar/>
      <Presentation ruta={foto}/>
      <About imagen={curriculum}/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App;
