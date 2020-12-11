import config from '../config';

async function postArticle(endpoint, data) {
  /* 
    Posts data to specified endpoint
  */
  const res = await fetch(`${config.API_BASE_URL}/${endpoint}/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
}

async function apiGet(endpoint) {
  /* 
    fetches data from requested endpoint
  */
  const res = await fetch(`${config.API_BASE_URL}/${endpoint}/`, {
    method: 'GET',
  });
  return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
}

export { apiGet, postArticle };
