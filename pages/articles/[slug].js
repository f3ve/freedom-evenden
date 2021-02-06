import { CircularProgress, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import { getBase64 } from '@plaiceholder/base64';
import { getImage } from '@plaiceholder/next';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';
import CodeBlock from '../../components/editor/CodeBlock';
import Heading from '../../components/editor/Heading';
import Footer from '../../components/article/footer';
import { getArticle, getPostSlugs } from '../../services/ArticleApiService';

const useStyles = makeStyles((theme) => ({
  mdWidth: {
    maxWidth: 800,
    color: theme.palette.text.primary,
  },

  container: {
    backgroundColor: theme.palette.background.main,
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 80,
    position: 'relative',
    zIndex: 1,
    fontFamily: 'Roboto Condensed',
    fontSize: 20,
    paddingBottom: 20,
    '& p': {
      lineHeight: 1.5,
    },
    '& a': {
      color: theme.palette.primary.main,
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
    '& h1, h2, h3, h4': {
      color: theme.palette.secondary.main,
      fontFamily: 'Roboto Slab',
      fontWeight: 'normal',
    },
    '& blockquote': {
      fontStyle: 'italic',
    },
  },

  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ArticlePage({ article, imgBase64, imgSrc }) {
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
        <meta name="description" content={article.summary} />
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
        {/* --- end twitter metta tags --- */}

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

        <BlockContent
          blocks={article.body}
          serializers={{
            types: {
              // eslint-disable-next-line react/display-name
              code: CodeBlock,
            },
          }}
        />
      </Container>
      <Footer imgBase64={imgBase64} imgSrc={imgSrc} />
    </>
  );
}

export async function getStaticPaths() {
  const data = await getPostSlugs();
  const paths = data.map((article) => ({
    params: { slug: article.slug.current },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug);
  const imgSrc = '/images/9A1C5BC0-339D-43CD-816A-3E9C3CD47FA0.jpg';
  const img = await getImage(imgSrc);
  const imgBase64 = await getBase64(img);

  return {
    props: { article, imgSrc, imgBase64 },
  };
}
