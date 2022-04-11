import axios from 'axios'
const api = axios.create({
  baseURL: 'https://eway-temp-shop.herokuapp.com',
})
export default api
