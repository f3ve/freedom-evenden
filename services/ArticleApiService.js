import axios from 'axios';
import config from '../config';

async function postArticle(endpoint, data) {
  /* 
    Posts data to specified endpoint
  */

  try {
    const res = await axios.post(`${config.API_BASE_URL}/${endpoint}/`, data);
    return res.data;
  } catch (err) {
    return err.data;
  }
}

async function apiGet(endpoint) {
  /* 
    fetches data from requested endpoint
  */

  try {
    const res = await axios.get(`${config.API_BASE_URL}/${endpoint}`);
    return res.data;
  } catch (err) {
    return err.data;
  }
}

async function apiPostLogin(endpoint, data) {
  /*
    Posts login data
  */

  try {
    const res = await axios.post(`${config.API_BASE_URL}/${endpoint}/`, data, {
      withCredentials: true,
    });
    return res;
  } catch (err) {
    return err.response.data;
  }
}

export { apiGet, postArticle, apiPostLogin };
