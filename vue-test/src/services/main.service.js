import axios from 'axios'

/**
 * @description axios installation, this is the main service in wich all configurations are set.
 */

let mainService = axios.create({
  baseURL: 'https://api.got.show/api',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default mainService
