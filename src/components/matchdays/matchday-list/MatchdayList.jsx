import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import matchesService from '../../../services/matches';
import Matchday from '../matchday/Matchday';
import Loader from '../../loader/Loader';
import Error from '../../error/Error';

export default function MatchdayList() {
  const [groupedMatches, setGroupedMatches] = useState(null)
  const [error, setError] = useState(null)
  const { leagueId } = useParams()

  useEffect(() => {
    matchesService.list(leagueId)
      .then(setGroupedMatches)
      .catch(setError)
  }, [leagueId]);

  if (error) {
    return <Error error={error}/>
  }

  if (!groupedMatches) {
    return <Loader />
  }

  return (
    <section>
      {groupedMatches.map((matchGroup, i) => <Matchday key={i} matchGroup={matchGroup} matchday={i + 1} />)}
    </section>
  )
}
