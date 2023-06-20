import './leagues-list.css';
import React, { useContext } from 'react';
import { LeaguesContext } from '../../../contexts/LeaguesContextProvider';
import LeagueItem from '../league-item/LeagueItem';

export default function LeaguesList() {
  const { leagues } = useContext(LeaguesContext)

  return (
    <>
      {!leagues ? (<div>Loading...</div>) : (
        <>
          <h1>LIGAS</h1>
          <div className='leagues-container'>
            {leagues.map((competition) => (
              <LeagueItem key={competition.id} {...competition} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
