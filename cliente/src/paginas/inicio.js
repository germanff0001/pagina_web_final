import React from 'react'
import {Link} from "react-router-dom"
import '../styles/inicio.css'
import Contacto from './contacto'
function inicio() {
  return (
    <div className='inicio'>
       <div className='cabecera'>
           <h1>Audi R8 Spyder V10 performance</h1>
           <p>Nuevo Audi R8 Spyder con motor V10</p>
            <Link to="/contacto">
                <button>Comprar Ya</button>
            </Link>
       </div>
    </div>
  )
}

export default inicio
