import axios from 'axios'
let mainService = axios.create({
  baseURL: 'https://api.got.show/api',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default mainService
