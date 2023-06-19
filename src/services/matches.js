import http from './base-api';

// TODO: map en la response para quedarme solo con lo necesario
const list = (id) => http.get(`/v4/competitions/${id}/matches`)
  .then((res) => {
    const matches = res.data.matches

    const groupedMatches = matches.reduce((_groupedMatches, match) => {
      _groupedMatches[match.matchday - 1] = _groupedMatches[match.matchday - 1] || [];
      _groupedMatches[match.matchday - 1].push(match);

      return _groupedMatches;
    }, [])
    return groupedMatches
  })

export default {
  list
}