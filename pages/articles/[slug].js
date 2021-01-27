import { CircularProgress, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/editor/CodeBlock';
import Heading from '../../components/editor/Heading';
import { apiGet } from '../../services/ArticleApiService';
import Footer from '../../components/article/footer';

const useStyles = makeStyles((theme) => ({
  mdWidth: {
    maxWidth: 800,
    color: theme.palette.text.primary,
  },

  container: {
    backgroundColor: theme.palette.background.main,
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    zIndex: 1,
    fontFamily: 'Roboto Condensed',
    fontSize: 20,
    '& p': {
      lineHeight: 1.5,
    },
    '& a': {
      color: theme.palette.primary,
      '&:hover': {
        textDecoration: 'underline',
      },
    },

    '& p code': {
      backgroundColor: 'rgb(40, 44, 52)',
      borderRadius: 5,
      paddingRight: 2,
      paddingLeft: 2,
      color: theme.palette.secondary.main,
    },
    '& img': {
      maxWidth: '100%',
      borderRadius: 10,
    },
  },

  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ArticlePage({ article }) {
  const styles = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Container className={styles.loading}>
        <Typography variant="h2" color="secondary" gutterBottom>
          This should only take a second
        </Typography>
        <CircularProgress color="primary" />;
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta name="author" content="Freedom Evenden" />
        <meta name="keywords" content={article.keywords} />

        {/* --- twitter meta tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:site" content="@f3veDev" />
        <meta name="twitter:creator" content="@f3veDev" />
        <meta name="twitter:description" content={article.summary} />
        <meta
          name="twitter:image"
          content="https://freedomevenden.com/preview.png"
        />
        {/* --- end twitter meta tags --- */}

        <meta
          property="og:image"
          content="https://freedomevenden.com/preview.png"
        />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta
          property="og:url"
          content={`https://freedomevenden.com/articles/${article.slug}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxWidth="md"
        className={styles.container}
        classes={{
          maxWidthMd: styles.mdWidth,
        }}
      >
        <Heading text={article.title} level={2} />
        <ReactMarkdown
          source={article.content}
          renderers={{
            code: CodeBlock,
            heading: Heading,
          }}
        />
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const data = await apiGet('articles/');

  const paths = data.results.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const data = await apiGet(`articles/${params.slug}`);
  return {
    props: { article: data },
  };
}
