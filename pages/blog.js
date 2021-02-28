/* 
  Blog page. Renders a list of all my recent blog posts
*/

import { Box, Chip, CircularProgress, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';
import { useState } from 'react';
import ArticleCard from '../components/home/ArticleCard';
import {
  getCategories,
  getPosts,
  getPostsByCategory,
} from '../services/ArticleApiService';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2),
    listStyle: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    marginTop: theme.spacing(10),
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flexStart',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  backdrop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flexStart',
  },
}));

export default function blog({ articles, categories }) {
  const styles = useStyles();
  const [results, setResults] = useState({});
  const [state, setState] = useState({
    data: null,
    loading: false,
    category: null,
  });

  async function handleSelectCategory(cat) {
    setState((cur) => ({
      ...cur,
      loading: true,
      category: cat._id,
    }));

    // if results already cached populate state with saved results
    if (results[cat._id]) {
      setState((cur) => ({
        ...cur,
        loading: false,
        data: results[cat._id],
      }));
      return;
    }

    // else fetch results
    const res = await getPostsByCategory(cat._id);
    setState((cur) => ({
      ...cur,
      loading: false,
      data: res,
    }));

    // save results in state be used later
    setResults((cur) => ({
      ...cur,
      [cat._id]: res,
    }));
  }

  function clearCategoryFilter() {
    setState({
      data: null,
      loading: false,
      category: null,
    });
  }

  return (
    <>
      <Head>
        <title>Freedom - Blog</title>
        <meta name="author" content="Freedom Evenden" />
        <meta
          name="description"
          content="Freedom Evenden's web development blog"
        />
      </Head>
      <Container maxWidth="md" component="ul" className={styles.container}>
        <div className={styles.chipContainer}>
          <Chip
            label="All"
            onClick={() => clearCategoryFilter()}
            color={state.category === null ? 'secondary' : 'primary'}
            disabled={state.category === null}
          />
          {categories &&
            categories.map((cat) => (
              <Chip
                label={cat.title}
                key={cat._id}
                onClick={() => handleSelectCategory(cat)}
                color={state.category === cat._id ? 'secondary' : 'primary'}
                disabled={state.category === cat._id}
              />
            ))}
          {state.loading && <CircularProgress color="primary" size={30} />}
        </div>
        {articles &&
          state.data === null &&
          articles.map((article) => (
            <Box className={styles.box} component="li" key={article.id}>
              <ArticleCard article={article} />
            </Box>
          ))}
        {state.data !== null &&
          state.data.map((article) => (
            <Box className={styles.box} component="li" key={article.id}>
              <ArticleCard article={article} />
            </Box>
          ))}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const articles = await getPosts();
  const categories = await getCategories();
  return {
    props: { articles, categories },
    revalidate: 60,
  };
}
