import LinkButton from '../../link-button/LinkButton'
import './league-item.css'


export default function LeagueItem({ id, type, countryName, countryFlag, name, emblem }) {
  return (
    <div className='league-item-container'>
      {type === 'CUP' && <img className='cup' src='/black-cup.png' alt='COPA' />}
      <div className='img-frame'>
        <img src={emblem} alt="emblem" />
      </div>
      <p>{name}</p>
      <div className='country-frame'>
        <p>{countryName}</p>
        {type === 'LEAGUE' && <img src={countryFlag} alt={countryName} />}
      </div>
      <div className='buttons-container'>
        <LinkButton toRoute={`/${id}/standings`}>Clasificación</LinkButton>
        <LinkButton toRoute={`/${id}/matchdays`}>Partidos</LinkButton>
      </div>
    </div>
  )
}
