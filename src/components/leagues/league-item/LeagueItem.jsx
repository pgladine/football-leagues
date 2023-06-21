import LinkButton from '../../link-button/LinkButton'
import './league-item.css'


export default function LeagueItem({ id, name, emblem }) {
  return (
    <div className='league-item-container'>
      <div className='img-frame'>
        <img src={emblem} alt="emblem" />
      </div>
      <p>{name}</p>
      <div className='buttons-container'>
        <LinkButton toRoute={`/${id}/standings`}>Clasificación</LinkButton>
        <LinkButton toRoute={`/${id}/matchdays`}>Partidos</LinkButton>
      </div>
    </div>
  )
}
