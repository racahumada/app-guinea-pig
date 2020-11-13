import axios from 'axios';
// import { getToken } from '../config/auth.js'

const httpConnect = axios.create({
  baseURL: 'http://localhost:3001',
});


export default httpConnect;