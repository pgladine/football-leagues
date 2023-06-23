import http from './base-api';

const list = () => http.get('/v4/competitions/')
  .then((res) => {
    const apiCompetitions = res.data?.competitions
    const leagues = apiCompetitions.map((league) => ({
      id: league.id,
      type: league.type,
      countryName: league.area?.name,
      countryFlag: league.area?.flag,
      name: league.name,
      emblem: league.emblem
    }))
    return leagues
  })

export default {
  list
}