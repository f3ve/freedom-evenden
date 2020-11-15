import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from '../components/global/TopBar';
import store from '../dummyStore';

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const [posts, setPosts] = useState([]);
  const styles = useStyles();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosts(store.posts);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Freedom Evenden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopBar />
      <Grid component='main' container md spacing={2} justify='center'>
        <Grid item>
          <Grid container spacing={2} component='ul' direction='column'>
            {posts && (
              <>
                {posts.map((post) => {
                  return (
                    <Grid item xs={4} key={post.id}>
                      <Card className={styles.paper}>
                        <CardContent>
                          <Typography variant='h4' gutterBottom component='h2'>
                            {post.title}
                          </Typography>
                          <Divider />
                          <Typography variant='body1' component='p'>
                            {post.content}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
