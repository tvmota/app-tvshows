import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default Api
