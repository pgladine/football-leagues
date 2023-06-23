import http from './base-api';

function cleanTeamData(teamData) {
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
}

function cleanStandingGroups(standingGroups) {

  return standingGroups.map((standingGroup) => {
    const _standingGroup = []
    const cleanGroup = standingGroup.table?.map((teamData) => cleanTeamData(teamData))
    _standingGroup.push(standingGroup.group, cleanGroup)
    return _standingGroup
  })
}

const list = (id) => http.get(`/v4/competitions/${id}/standings`)
  .then((res) => cleanStandingGroups(res.data?.standings))

export default {
  list
}