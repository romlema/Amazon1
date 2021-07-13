import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-fir-71a9e.cloudfunctions.net/api'

});

export default instance;
