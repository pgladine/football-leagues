import React from 'react'
import './league-item.css'

export default function LeagueItem({ name, emblem }) {
  return (
    <div className='league-item-container'>
      <h3>{name}</h3>
      <div className='img-frame'>
        <img src={emblem} alt="emblem" />
      </div>
      <div>
        <button>Clasificación</button>
        <button>Resultado</button>
      </div>
    </div>
  )
}
