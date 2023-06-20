import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || 'http://localhost:5173/api' ,
  headers: {'X-Auth-Token': import.meta.env.VITE_API_KEY},
})

export default http