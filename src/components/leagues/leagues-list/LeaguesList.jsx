import './leagues-list.css';
import React, { useContext, useState } from 'react';
import { LeaguesContext } from '../../../contexts/LeaguesContextProvider';
import LeagueItem from '../league-item/LeagueItem';
import Loader from '../../loader/Loader';
import Error from '../../error/Error';

export default function LeaguesList() {
  const { leagues, error } = useContext(LeaguesContext)

  if (error) {
    return <Error error={error} />
  }

  if (!leagues) {
    return <Loader />
  }

  return (
    <section>
      {
        <div className='leagues-container'>
          {leagues.map((competition) => (
            <LeagueItem key={competition.id} {...competition} />
          ))}
        </div>
      }
    </section>
  )
}
