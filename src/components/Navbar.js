import React from 'react'
import logo from "../Vector.svg"

import "../style.css"

function Navbar() {
  return (
    <nav className='nav'>
        <img src={logo} alt="logo" className='logo' />
        
    </nav>
  )
}

export default Navbar