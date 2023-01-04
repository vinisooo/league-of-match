import axios from "axios";

export const api = axios.create({
    baseURL: '',
    responseType: 'json',
    timeout: 5000
})