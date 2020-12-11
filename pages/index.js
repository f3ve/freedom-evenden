import Head from 'next/head';
import { useState } from 'react';
import { Container, Fade, Grid } from '@material-ui/core';
import NewsLetter from '../components/home/NewsLetter';
import RecentVideos from '../components/home/RecentVideos';
import RecentArticles from '../components/home/RecentArticles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Freedom Evenden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Fade in>
        <Container maxWidth='md'>
          <Grid component='main' container justify='space-between' spacing={6}>
            <RecentArticles />
            <Grid item xs={12} sm={5}>
              <Grid container spacing={2} justify='center'>
                <NewsLetter />
                <RecentVideos />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </>
  );
}
