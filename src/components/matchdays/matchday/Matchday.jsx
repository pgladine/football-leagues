import React, { useEffect, useState } from 'react';
import Match from '../match/Match';
import './matchday.css'


export default function Matchday({ matchGroup }) {

  return (
    <div className='matchday-container'>
      <h3>
        Jornada: {matchGroup[0].matchday}
      </h3>
      {matchGroup.map((match) => {
        return <Match key={match.matchId} {...match} />
      }
      )}
    </div>
  )
}

