import axios from "axios";

export const api = axios.create({
    baseURL: 'https://league-of-match-api.onrender.com/api'
})
