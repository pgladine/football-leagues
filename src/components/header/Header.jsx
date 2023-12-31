import './header.css'
import React, { useContext, useEffect, useState } from 'react';
import { LeaguesContext } from '../../contexts/LeaguesContextProvider';
import { Link, useParams } from 'react-router-dom'

export default function Header() {
  const { leagueId } = useParams()
  const { leagues } = useContext(LeaguesContext)
  const [selectedLeague, setSelectedLeague] = useState(null)

  useEffect(() => {
    const currentLeague = leagues?.find((league) => league.id == leagueId)
    setSelectedLeague(currentLeague)
  }, [leagueId, leagues])

  return (
    <div className='header'>
      <Link className='header-link' to={'/'}><h1>Competiciones</h1></Link>
      {selectedLeague &&
        <div className='header-league'>
        {selectedLeague.type === 'CUP' && <img src='/black-cup.png' alt='COPA' />}
          <p>{selectedLeague?.name}</p>
          <img src={selectedLeague?.emblem} alt={selectedLeague?.name} />
        </div>
      }
    </div>
  )
}
