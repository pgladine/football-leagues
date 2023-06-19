import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import standingsService from '../../../services/standings';
import StandingRow from '../standing-row/StandingRow'
import './standing-table.css'

export default function Standings() {
  const [standings, setStandings] = useState(null)
  const { leagueId } = useParams()

  useEffect(() => {
    standingsService.list(leagueId)
      .then((standingsResponse) => setStandings(standingsResponse))
      .catch(console.error)
  }, [leagueId]);

  return (
    <>
      {!standings ? (<div>Loading...</div>) : (
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
          {standings.map((teamData) => (
            <StandingRow key={teamData.team.id} position={teamData.position} crest={teamData.team.crest} shortName={teamData.team.shortName} points={teamData.points} playedGames={teamData.playedGames} won={teamData.won} draw={teamData.draw} lost={teamData.lost} goalsFor={teamData.goalsFor} goalsAgainst={teamData.goalsAgainst} />
          ))}
        </>
      )}
    </>
  )
}
