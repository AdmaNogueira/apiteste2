import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://apipgc2-test8.onrender.com/'
})