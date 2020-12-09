import Axios from 'axios';
import config from '../config';

const ArticleApiService = {
  postArticle(endpoint, data) {
    // return Axios.post(`${config.API_BASE_URL}/${endpoint}/`, data);
    return fetch(`${config.API_BASE_URL}/${config.API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ArticleApiService;
