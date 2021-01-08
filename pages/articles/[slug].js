import Image from 'next/image';
import {
  ButtonGroup,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
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

  footer: {
    maxWidth: 800,
    textAlign: 'center',
  },

  container: {
    backgroundColor: colors.background,
    borderRadius: 20,
    position: 'relative',
    zIndex: 1,
    marginBottom: 20,
  },

  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  authorImage: {
    borderRadius: 10,
    objectFit: 'cover',
  },
}));

export default function ArticlePage({ article }) {
  const styles = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
            paragraph: Paragraph,
            heading: Heading,
            link: markdownLink,
          }}
        />
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        classes={{ maxWidthMd: styles.footer }}
      >
        <Divider />
        <Heading text="About the Author" level={2} />
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item md={4} sm={12}>
            <Image
              alt="picture of the author"
              src="/images/9A1C5BC0-339D-43CD-816A-3E9C3CD47FA0.jpg"
              width={250}
              height={250}
              className={styles.authorImage}
            />
          </Grid>
          <Grid item md={8}>
            <Grid
              container
              justify={smallScreen ? 'center' : 'flex-start'}
              alignItems="center"
            >
              <Grid item>
                <ButtonGroup>
                  <IconButton
                    color="primary"
                    href="https://www.linkedin.com/in/freedom-evenden-dev/"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton color="primary" href="https://github.com/f3ve">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="mailto:free.eve@protonmail.com"
                  >
                    <MailIcon />
                  </IconButton>
                </ButtonGroup>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="textPrimary" align="left">
                  Freedom is a Full-Stack Web Developer specializing in React
                  and Python. He first learned how to code as an apprentice in
                  Thinkful&apos;s Full-Stack Engineer course and then landed his
                  first job as a Lead Engineer to a subscription-based video
                  streaming service. Lately he&apos;s have been working on
                  mobile app development with React Native and experimenting
                  with web design and UX.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
