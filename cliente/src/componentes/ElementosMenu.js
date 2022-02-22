import React from 'react'

function ElementosMenu({imagen, modelo}) {
  return (
    <div className='ElementosMenu'>
        <div style={{backgroundImage: `url(${imagen})`}}></div>
        <h1>{modelo}</h1>
    </div>
  )
}

export default ElementosMenu
