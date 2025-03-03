import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // L'URL de votre backend Node.js
});

export default api;
