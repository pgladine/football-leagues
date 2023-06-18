import React, { useEffect, useState } from 'react';
import './leagues-list.css';
import leaguesService from '../../../services/leagues';
import LeagueItem from '../league-item/LeagueItem';

export default function LeaguesList() {
  const [leagues, setLeagues] = useState(null)

  useEffect(() => {
    leaguesService.list()
      .then((competitions) => setLeagues(competitions))
      .catch(console.error)
  }, []);

  return (
    <>
      {!leagues ? (<div>Loading...</div>) : (
        <>
          <h1>LIGAS</h1>
          <div className='leagues-container'>
            {leagues.map((competition) => (
              <LeagueItem key={competition.id} id={competition.id} name={competition.name} emblem={competition.emblem} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
