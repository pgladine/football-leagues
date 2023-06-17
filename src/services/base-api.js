import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || 'https://api.football-data.org' ,
  withCredentials: true,
  headers: {'X-Auth-Token': import.meta.env.VITE_API_KEY},
})

export default http