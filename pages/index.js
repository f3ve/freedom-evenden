import Head from 'next/head';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import RouterLink from '../components/global/RouterLinks';

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: 30,
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: theme.breakpoints.down('sm') ? 'flexStart' : 'center',
    alignItems: 'center',
  },
  gridContainer: {
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>Freedom Evenden</title>
        <meta name="author" content="Freedom Evenden" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Freedom Evenden" />
        <meta name="twitter:site" content="@f3veDev" />
        <meta name="twitter:creator" content="@f3veDev" />
        <meta
          name="twitter:description"
          content="Freedom Evenden's Web Development blog and portfolio"
        />
        <meta
          name="twitter:image"
          content="https://freedomevenden.com/preview.png"
        />
        {/* End twitter meta tags */}

        <meta
          name="description"
          content="Freedom Evenden's Web Development blog and portfolio"
        />
        <meta
          name="keywords"
          content="freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog"
        />
        <meta
          name="google-site-verification"
          content="Lp9a1YPrBv963HrvdTAhuI1-nyyOZq1nNVRqA8lC1ao"
        />
        <meta
          property="og:image"
          content="https://freedomevenden.com/preview.png"
        />
        <meta property="og:title" content="Freedom Evenden" />
        <meta
          property="og:description"
          content="Freedom Evenden's Web Development blog and portfolio"
        />
        <meta property="og:url" content="https://freedomevenden.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <Box className={styles.grid}>
          <Typography
            variant="h2"
            color="secondary"
            gutterBottom={false}
            align="center"
          >
            Freedom Evenden
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            align="center"
            gutterBottom
            className={styles.subtitle}
          >
            I write code and I love cats
          </Typography>
          <RouterLink href="/blog" text="Blog" className={styles.link} />
          <RouterLink href="/about" text="About" className={styles.link} />
          <RouterLink
            href="/portfolio"
            text="Portfolio"
            className={styles.link}
          />
        </Box>
      </Container>
    </>
  );
}
