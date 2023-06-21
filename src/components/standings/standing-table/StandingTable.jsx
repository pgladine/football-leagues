import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import standingsService from '../../../services/standings';
import StandingRow from '../standing-row/StandingRow'
import './standing-table.css'

export default function StandingTable() {
  const [standing, setStanding] = useState(null)
  const { leagueId } = useParams()

  useEffect(() => {
    standingsService.list(leagueId)
      .then(setStanding)
      .catch(console.error)
  }, [leagueId]);

  return (
    <section>
      {!standing ? (<div>Loading...</div>) : (
        <>
          <div className='standing-header'>
            <div>EQUIPOS</div>
            <div className='team-numbers'>
              <span>PT</span>
              <span>PJ</span>
              <span>PG</span>
              <span>PE</span>
              <span>PP</span>
              <span>GF</span>
              <span>GC</span>
            </div>
          </div>
          {standing.map((teamData) => (
            <StandingRow key={teamData.teamId} {...teamData} />
          ))}
        </>
      )}
    </section>
  )
}
