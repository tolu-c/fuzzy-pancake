import axios from 'axios';

const instance = axios.create({
  baseURL: "https://datingme-app.herokuapp.com",
  timeout: 4000,
  // headers: { 'X-Custom-Header': 'foobar' }
});
export default instance;