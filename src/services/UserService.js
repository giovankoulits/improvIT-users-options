import axios from 'axios';

const usersApi = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
   withCredentials: false, // This is the default
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
});

export default usersApi;
