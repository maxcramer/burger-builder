import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-bar-ed94a-default-rtdb.firebaseio.com/'
});

export default instance;