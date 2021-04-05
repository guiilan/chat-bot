import axios from 'axios';

const api = axios.create({
    baseURL:'https://606b1685f8678400172e5913.mockapi.io/api/v1'
});

export default api;