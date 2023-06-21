import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import matchesService from '../../../services/matches';
import Matchday from '../matchday/Matchday';

export default function MatchdayList() {
  const [groupedMatches, setGroupedMatches] = useState(null)
  const { leagueId } = useParams()

  useEffect(() => {
    matchesService.list(leagueId)
      .then(setGroupedMatches)
      .catch(console.error)
  }, [leagueId]);

  return (
    <section>
      {!groupedMatches ? (<div>Loading...</div>) : (
        groupedMatches.map((matchGroup, i) => <Matchday key={i} matchGroup={matchGroup} matchday={i + 1} />)
      )
      }
    </section>
  )
}
