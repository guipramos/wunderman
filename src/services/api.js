import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.postman.com/collections/dc330e0dfb24c9251c33'
})

export default api;