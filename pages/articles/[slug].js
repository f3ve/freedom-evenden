import {
  CircularProgress,
  Container,
  Slide,
  Typography,
  Zoom,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/editor/CodeBlock';
import Heading from '../../components/editor/Heading';
import markdownLink from '../../components/editor/markdownLink';
import Paragraph from '../../components/editor/Paragraph';
import { apiGet } from '../../services/ArticleApiService';
import { colors } from '../../Theme';

const useStyles = makeStyles(() => ({
  mdWidth: {
    maxWidth: 800,
    color: colors.white,
  },

  container: {
    backgroundColor: colors.background,
    boxShadow: `0 0 100px 100px ${colors.background}`,
    borderRadius: 20,
    position: 'relative',
    zIndex: 1,
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
      <Zoom in>
        <Container className={styles.loading}>
          <Typography variant='h2' color='secondary' gutterBottom>
            This should only take a second
          </Typography>
          <CircularProgress color='primary' />;
        </Container>
      </Zoom>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name='description' content={article.summary} />
        <meta name='author' content='Freedom Evenden' />
        <meta name='keywords' content={article.keywords} />
      </Head>
      <Slide direction='up' in>
        <Container
          maxWidth='md'
          className={styles.container}
          classes={{
            maxWidthMd: styles.mdWidth,
          }}
        >
          {article && (
            <>
              <Heading text={article.title} level={2} />
              <ReactMarkdown
                source={article.content}
                renderers={{
                  code: CodeBlock,
                  paragraph: Paragraph,
                  heading: Heading,
                  link: markdownLink,
                }}
              />
            </>
          )}
        </Container>
      </Slide>
    </>
  );
}

export async function getStaticPaths() {
  const data = await apiGet('articles/?page_size=20');

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
