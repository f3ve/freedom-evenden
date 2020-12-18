import { Box, Collapse, Container, Fade, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';
import { useState } from 'react';
import ArticleCard from '../components/home/ArticleCard';
import { apiGet } from '../services/ArticleApiService';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2),
  },
}));

export default function blog({ data }) {
  const styles = useStyles();
  const [error, setError] = useState(false);

  return (
    <>
      <Head>
        <title>Freedom - Blog</title>
        <meta name='author' content='Freedom Evenden' />
        <meta
          name='description'
          content="Freedom Evenden's web development blog"
        />
        <meta
          name='keywords'
          content='freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog'
          key='app'
        />
      </Head>
      <Fade in>
        <Container maxWidth='md'>
          <Collapse in={error}>
            <Typography color='error'>
              Uh oh! Looks like something went wrong. Refresh the page or try
              again later.
            </Typography>
          </Collapse>
          {data &&
            data.results.map((article) => {
              return (
                <>
                  <Box className={styles.box}>
                    <ArticleCard article={article} />
                  </Box>
                </>
              );
            })}
        </Container>
      </Fade>
    </>
  );
}

export async function getStaticProps(context) {
  const data = await apiGet('articles/?page_size=20');
  return {
    props: { data },
    revalidate: 1,
  };
}
