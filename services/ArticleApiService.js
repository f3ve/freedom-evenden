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
  const res = await fetch(`${config.API_BASE_URL}/${endpoint}/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return !res.ok ? res.json().then((e) => Promise.reject(e)) : 'yeet';
}

export { apiGet, postArticle, apiPostLogin };
