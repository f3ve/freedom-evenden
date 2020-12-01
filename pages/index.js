import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container, Divider, Grid, Typography } from '@material-ui/core';
import store from '../dummyStore';
import ArticleCard from '../components/home/ArticleCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosts(store.posts);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <Container maxWidth='md'>
      <Head>
        <title>Freedom Evenden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
          <Divider />
          <Grid container spacing={6} direction='column'>
            {posts.length > 0 && (
              <>
                {posts.map((post) => {
                  return <ArticleCard post={post} key={post.id} />;
                })}
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Typography
                variant='h4'
                gutterBottom
                component='h2'
                color='secondary'
              >
                News Letter
              </Typography>
              <Divider />
              <Typography variant='body1' component='p'>
                My goal with this blog is to provide free tutorials and tips for
                developers of all levels. By subscribing below you will get
                updates anytime I post something new. No Spam. Unsubscribe
                anytime
              </Typography>
            </Grid>
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
  );
}
