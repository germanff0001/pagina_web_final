import React from 'react'
import "../styles/contacto.css"
function contacto() {
  return (
    <div className='contacto'> 
        <div className='leftSide'></div>
        <div className='rightSide'>
            <h1>Contacto</h1>
            <form id='formularioContacto' method='POST'>
                <a>Nombre:</a>
                <br/>
                <input type="text"/>
                <br/>
                <a>DNI:</a>
                <br/>
                <input type="text"/>
                <br/>               
                <a>Email:</a>
                <br/>
                <input type="text"/>
                <br/>
                <a>Mensaje</a>
                <br/>
                <button type='submit'>Eniviar</button>
            </form>

        </div>
    </div>
  )
}

export default contacto 
 