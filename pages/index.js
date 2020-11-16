import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container, Divider, Fade, Grid, Typography } from '@material-ui/core';
import TopBar from '../components/global/TopBar';
import store from '../dummyStore';
import ArticleCard from '../components/home/ArticleCard';
import ArticleList from '../components/home/ArticleList';
import NewsLetter from '../components/home/NewsLetter';

export default function Home() {
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
    <>
      <Head>
        <title>Freedom Evenden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Fade in>
        <Container maxWidth='md'>
          <TopBar />
          <Grid component='main' container justify='space-between' spacing={6}>
            <Grid item xs={12} sm={7}>
              <Typography
                variant='h4'
                component='h2'
                gutterBottom
                color='secondary'
              >
                Recent Articles
              </Typography>
              <Fade in={posts.length > 0}>
                <ArticleList posts={posts} />
              </Fade>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Grid container spacing={2} justify='center'>
                <NewsLetter />
                <Grid item>
                  <Typography
                    variant='h4'
                    gutterBottom
                    component='h2'
                    color='secondary'
                  >
                    Recent Videos
                  </Typography>
                  <Divider />
                  <Typography>
                    I am also on YouTube! You can subscribe any time
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </>
  );
}
