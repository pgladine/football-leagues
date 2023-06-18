import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import matchesService from '../../../services/matches';
import DailyMatches from '../daily-matches/DailyMatches';

export default function DailyMatchesList() {
  const [groupedMatches, setGroupedMatches] = useState(null)
  const { leagueId } = useParams()

  useEffect(() => {
    matchesService.list(leagueId)
      .then((matchesResponse) => setGroupedMatches(matchesResponse))
      .catch(console.error)
  }, [leagueId]);

//TODO : cambiar la key del map para no utilizar el índice
  return (
    <>
      {!groupedMatches ? (<div>Loading...</div>) : (
        groupedMatches.map((matchdaysMatches, index) => <DailyMatches key={index} matchdayMatches={matchdaysMatches} />)
      )
      }
    </>
  )
}
