import http from './base-api';

// TODO: map en la response para quedarme solo con lo necesario
const list = (id) => http.get(`/v4/competitions/${id}/standings`).then((res) => res.data.standings[0].table)

export default {
  list
}