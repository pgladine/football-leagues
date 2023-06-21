import './match.css'

export default function Match({ homeCrest, homeName, homeScore, awayCrest, awayName, awayScore }) {
  return (

    <>
      <div className='match-container'>
        <div className='homeTeam-info'>
          <img src={homeCrest} alt={homeName} />
          <span>{homeName}</span>
        </div>
        <div className='score'>{homeScore} - {awayScore}</div>
        <div className='awayTeam-info'>
          <span>{awayName}</span>
          <img src={awayCrest} alt={awayName} />
        </div>
      </div>
    </>
  )
}

