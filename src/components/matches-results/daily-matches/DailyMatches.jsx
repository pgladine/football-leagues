import React, { useEffect, useState } from 'react';
import Match from '../../matches-results/match/Match';
import './daily-matches.css'


export default function DailyMatches({ matchdayMatches }) {



  return (
    <div className='matchday-container'>
      <h3>
        Jornada: {matchdayMatches[0].matchday}
      </h3>
      {matchdayMatches.map((match) => {
        return <Match key={match.id} homeCrest={match.homeTeam.crest} homeName={match.homeTeam.shortName} homeScore={match.score.fullTime.home} awayCrest={match.awayTeam.crest} awayName={match.awayTeam.shortName} awayScore={match.score.fullTime.away} />
      }
      )}
    </div>
  )
}

