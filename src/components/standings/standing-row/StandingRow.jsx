import React from 'react'
import './standing-row.css'

export default function StandingRow({ position, teamCrest, teamName, points, playedGames, won, draw, lost, goalsFor, goalsAgainst }) {
  return (
    <div className='standing-container'>
      <div className='home-team-info'>
        <span>{position}</span>
        <img src={teamCrest} alt="escudo" />
        <span>{teamName}</span>
      </div>
      <div className='team-numbers'>
        <span className='total-points'>{points}</span>
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