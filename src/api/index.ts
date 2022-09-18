import axios from 'axios'
const api = axios.create({
  // baseURL: 'https://eway-temp-shop.herokuapp.com',
  baseURL: 'http://localhost:1340',
})
export default api
