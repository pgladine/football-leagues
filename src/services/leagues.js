import http from './base-api';

// TODO: map en la response para quedarme solo con lo necesario
const list = () => http.get('/v4/competitions/').then((res) => res.data.competitions)



export default {
  list
}