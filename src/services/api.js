import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-rocketshoes-erika.herokuapp.com/',
});

export default api