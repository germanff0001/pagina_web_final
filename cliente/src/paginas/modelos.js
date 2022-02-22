import React from 'react'
import { ListaModelos } from '../componentes/ListaModelos'
import ElementosMenu from '../componentes/ElementosMenu'
import "../styles/modelos.css"

function modelos() {
  return (
    <div className='modelos'>
        <h1 className='modelosTitulo'>Modelos</h1>
        <div className='listaModelos'>
            {ListaModelos.map((menuItem, key) => {
                return( 
                <ElementosMenu
                    key={key}
                    imagen={menuItem.imagen} 
                    modelo={menuItem.modelo}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default modelos
