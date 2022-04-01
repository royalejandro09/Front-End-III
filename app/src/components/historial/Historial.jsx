import React from 'react'

function Historial({ historial, seleccionPrev }) {

  return (

    <div className='recordatorio'>

      <h3>seleccion anterior {seleccionPrev}</h3>

      <h4>Historial de opciones elegidas</h4>

      <ul>
        {historial.map((element, index) => (
          <li key={element + index}>{element}</li>
        ))}
      </ul>

    </div>
  )
}

export default Historial