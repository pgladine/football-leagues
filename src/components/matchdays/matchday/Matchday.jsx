import Match from '../match/Match';
import './matchday.css'


export default function Matchday({ matchGroup, matchday }) {

  return (
    <div className='matchday-container'>
      <h3>
        Jornada: {matchday}
      </h3>
      {matchGroup.map((match) => {
        return <Match key={match.matchId} {...match} />
      }
      )}
    </div>
  )
}

