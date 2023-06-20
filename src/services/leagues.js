import http from './base-api';

const list = () => http.get('/v4/competitions/')
  .then((res) => {
    const apiCompetitions = res.data?.competitions
    const competitions = apiCompetitions.map((competition) => ({
      id: competition.id,
      name: competition.name,
      emblem: competition.emblem
    }))
    return competitions
  })

export default {
  list
}