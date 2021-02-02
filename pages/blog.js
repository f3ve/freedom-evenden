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
    marginTop: theme.spacing(15),
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
  const [state, setState] = useState(null);
  const [results, setResults] = useState({});
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSelectCategory(cat) {
    setLoading(true);
    setCategory(cat._id);

    // if results already cached populate state with saved results
    if (results[cat._id]) {
      setState(results[cat._id]);
      setLoading(false);
      return;
    }

    // else fetch results
    const res = await getPostsByCategory(cat._id);
    setState(res);

    // save results in state be used later
    setResults((cur) => ({
      ...cur,
      [cat._id]: res,
    }));
    setLoading(false);
  }

  function clearCategoryFilter() {
    setState(null);
    setCategory(null);
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
        <meta
          name="keywords"
          content="freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog"
          key="app"
        />
      </Head>
      <Container maxWidth="md" component="ul" className={styles.container}>
        <div className={styles.chipContainer}>
          <Chip
            label="All"
            onClick={() => clearCategoryFilter()}
            color={category === null ? 'secondary' : 'primary'}
            disabled={category === null}
          />
          {categories &&
            categories.map((cat) => (
              <Chip
                label={cat.title}
                key={cat._id}
                onClick={() => handleSelectCategory(cat)}
                color={category === cat._id ? 'secondary' : 'primary'}
                disabled={category === cat._id}
              />
            ))}
          {loading && <CircularProgress color="primary" size={30} />}
        </div>
        {articles &&
          state === null &&
          articles.map((article) => (
            <Box className={styles.box} component="li" key={article.id}>
              <ArticleCard article={article} />
            </Box>
          ))}
        {state !== null &&
          state.map((article) => (
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
