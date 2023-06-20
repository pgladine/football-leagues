import './league-item.css'
import { Link } from 'react-router-dom'

export default function LeagueItem({ id, name, emblem }) {
  return (
    <div className='league-item-container'>
      <h3>{name}</h3>
      <div className='img-frame'>
        <img src={emblem} alt="emblem" />
      </div>
      <div>
        {/* TODO: dar estilos a Link y quitar button */}
        <button><Link to={`/${id}/standings`}>Clasificación</Link></button>
        <button><Link to={`/${id}/matchdays`}>Partidos</Link></button>
      </div>
    </div>
  )
}
