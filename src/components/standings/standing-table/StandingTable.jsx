import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import standingsService from '../../../services/standings';
import StandingRow from '../standing-row/StandingRow'
import './standing-table.css'
import Loader from '../../loader/Loader';
import Error from '../../error/Error';

export default function StandingTable() {
  const [standing, setStanding] = useState(null)
  const [error, setError] = useState(null)
  const { leagueId } = useParams()

  useEffect(() => {
    standingsService.list(leagueId)
      .then(setStanding)
      .catch(setError)
  }, [leagueId]);

  if (error) {
    return <Error error={error} />
  }

  if (!standing) {
    return <Loader />
  }

  return (
    <section>
      {standing.map((leagueGroup, i) => (
        <div className='standing-table-container' key={i}>
          {leagueGroup[0] && <p>GRUPO {leagueGroup[0]}</p>}
          <div className='standing-header' data-testid='standing-list-header'>
            <p>EQUIPOS</p>
            <div className='team-numbers'>
              <span className='total-points'>PT</span>
              <span>PJ</span>
              <span>PG</span>
              <span>PE</span>
              <span>PP</span>
              <span>GF</span>
              <span>GC</span>
            </div>
          </div>
          {leagueGroup[1].map((teamData) => (
            <StandingRow key={teamData.teamId} {...teamData} />
          ))}
        </div>
      ))}
    </section>
  )
}
