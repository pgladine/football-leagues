import React from 'react'
import './standing-row.css'

export default function RowData({ position, crest, shortName, points, playedGames, won, draw, lost, goalsFor, goalsAgainst }) {
  return (
    <div className='standing-container'>
      <div className='homeTeam-info'>
        <span>{position}</span>
        <img src={crest} alt="escudo" />
        <span>{shortName}</span>
      </div>
      <div className='team-numbers'>
        <span>{points}</span>
        <span>{playedGames}</span>
        <span>{won}</span>
        <span>{draw}</span>
        <span>{lost}</span>
        <span>{goalsFor}</span>
        <span>{goalsAgainst}</span>
      </div>
    </div>
  )
}