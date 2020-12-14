import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ArticleList from './ArticleList';
import { apiGet } from '../../services/ArticleApiService';

const RecentArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    const res = await apiGet('articles/?page_size=5');
    console.log(res);
    setArticles(res.results);
  }, []);

  return (
    <Grid item xs={12} sm={7}>
      <ArticleList articles={articles} />
    </Grid>
  );
};

export default RecentArticles;
