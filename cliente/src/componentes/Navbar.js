import React, {useState} from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'

import '../styles/Navbar.css'

function Navbar() {
    const [abrirmenu, setAbrirMenu] = useState(false);
    const toggleNavBar = () => {
         setAbrirMenu(!abrirmenu);
    }
    return (
    <div className='navbar'>
        <div className='leftSide' id={abrirmenu ? "open" : "close"}>
            <img src={Logo} />
            <div className='menudesplegable'>
            <Link to='/'>Inicio</Link>
            <Link to='modelos'>Modelos</Link>
            <Link to='/contacto'>Contacto</Link>
        </div>
    </div>
        <div className='rightSide'>
            <Link to='/'>Inicio</Link>
            <Link to='/modelos'>Modelos</Link>
            <Link to='/conversacion'>Chat</Link>
            <button onClick={toggleNavBar}>
               
            </button>
        </div>
    </div>
  )
}

export default Navbar
