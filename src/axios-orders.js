import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-2ce88-default-rtdb.firebaseio.com/'
});

export default instance;