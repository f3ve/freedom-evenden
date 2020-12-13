import { useState, useEffect } from 'react';
import { Grid, Typography, Fade } from '@material-ui/core';
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
      <Typography variant='h4' component='h2' gutterBottom color='secondary'>
        Recent Articles
      </Typography>
      <Fade in={articles.length > 0}>
        <ArticleList articles={articles} />
      </Fade>
    </Grid>
  );
};

export default RecentArticles;
