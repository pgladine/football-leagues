import http from './base-api';

const list = (id) => http.get(`/v4/competitions/${id}/standings`)
  .then((res) => {
    const apiStandingTable = res.data?.standings?.[0]?.table
    const standingTable = apiStandingTable.map((teamData) => {
      return {
        position: teamData.position,
        teamId: teamData.team?.id,
        teamName: teamData.team?.shortName,
        teamCrest: teamData.team?.crest,
        playedGames: teamData.playedGames,
        won: teamData.won,
        draw: teamData.draw,
        lost: teamData.lost,
        points: teamData.points,
        goalsFor: teamData.goalsFor,
        goalsAgainst: teamData.goalsAgainst,
      }
    })
    return standingTable
  })

export default {
  list
}