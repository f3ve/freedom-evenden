import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';
import ArticleCard from '../components/home/ArticleCard';
import { apiGet } from '../services/ArticleApiService';
import { colors } from '../Theme';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2),
    listStyle: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: colors.background,
    boxShadow: `0 0 50px 50px ${colors.background}`,
  },
}));

export default function blog({ data }) {
  const styles = useStyles();

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
        {data &&
          data.results.map((article) => (
            <Box className={styles.box} component="li" key={article.id}>
              <ArticleCard article={article} />
            </Box>
          ))}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const data = await apiGet('articles/?page_size=20');
  return {
    props: { data },
    revalidate: 1,
  };
}
