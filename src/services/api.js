import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-ferakan.herokuapp.com',
});

export default api;