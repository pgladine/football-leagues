import './leagues-list.css';
import React, { useContext } from 'react';
import { LeaguesContext } from '../../../contexts/LeaguesContextProvider';
import LeagueItem from '../league-item/LeagueItem';
import Loader from '../../loader/Loader';

export default function LeaguesList() {
  const { leagues } = useContext(LeaguesContext)

  return (
    <section>
      {!leagues ? (<Loader />) : (
        <>
          <div className='leagues-container'>
            {leagues.map((competition) => (
              <LeagueItem key={competition.id} {...competition} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
