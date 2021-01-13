import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://reactburgerbuilder-cc593-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;