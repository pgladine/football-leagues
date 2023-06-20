import http from './base-api';

const list = (id) => http.get(`/v4/competitions/${id}/matches`)
  .then((res) => {
    const apiMatches = res.data?.matches
    const groupedApiMatches = apiMatches.reduce((_groupedApiMatches, match) => {
      _groupedApiMatches[match.matchday - 1] = _groupedApiMatches[match.matchday - 1] || [];
      _groupedApiMatches[match.matchday - 1].push(match);

      return _groupedApiMatches;
    }, [])

    const groupedMatches = groupedApiMatches.map((apiMatchGroup) => {
      return apiMatchGroup.map((apiMatch) => {
        return {
          matchday: apiMatch.matchday,
          matchId: apiMatch.id,
          homeName: apiMatch.homeTeam?.shortName,
          homeCrest: apiMatch.homeTeam?.crest,
          homeScore: apiMatch.score?.fullTime?.home,
          awayName: apiMatch.awayTeam?.shortName,
          awayCrest: apiMatch.awayTeam?.crest,
          awayScore: apiMatch.score?.fullTime?.away,
        }
      })

    })
    return groupedMatches
  })

export default {
  list
}