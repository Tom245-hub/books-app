import axios from 'axios';

const request = axios.create({
  baseURL: "http://139.162.147.107:3973",
});

export default request;