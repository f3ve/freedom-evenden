import { useState, useEffect } from 'react';
import { Grid, Typography, Fade } from '@material-ui/core';
import ArticleList from './ArticleList';
import store from '../../dummyStore';

const RecentArticles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosts(store.posts);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <Grid item xs={12} sm={7}>
      <Typography variant='h4' component='h2' gutterBottom color='secondary'>
        Recent Articles
      </Typography>
      <Fade in={posts.length > 0}>
        <ArticleList posts={posts} />
      </Fade>
    </Grid>
  );
};

export default RecentArticles;
