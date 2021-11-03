import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:8080/v1`,
  headers: {'Content-Type': 'application/json'}
  // baseURL: `http://uplen.xyz/v1`,
});

export default instance;
