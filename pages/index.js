import Head from 'next/head';
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Zoom,
} from '@material-ui/core';
import RouterLink from '../components/global/RouterLinks';

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: 30,
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
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
        <meta
          name="description"
          content="Freedom Evenden's Web Development blog and portfolio"
          key="app"
        />
        <meta
          name="keywords"
          content="freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog"
          key="app"
        />
        <meta
          name="google-site-verification"
          content="Lp9a1YPrBv963HrvdTAhuI1-nyyOZq1nNVRqA8lC1ao"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <noscript>
        <Container maxWidth="md">
          <Box
            display="flex"
            flexDirection="column"
            paddingTop={10}
            alignItems="center"
            height="100%"
            width="100%"
          >
            <Typography
              variant="h2"
              color="Secondary"
              gutterBottom
              align="center"
            >
              Freedom Evenden
            </Typography>
            <Typography variant="body1" color="textPrimary">
              I write code and I love cats
            </Typography>
            <RouterLink href="/blog" text="Blog" />
            <RouterLink href="/portfolio" text="Portfolio" />
            <RouterLink href="/about" text="About Me" />
          </Box>
        </Container>
      </noscript>
      <Zoom in>
        <Container maxWidth="sm">
          <Box
            display="flex"
            flexDirection="column"
            paddingTop={10}
            alignItems="center"
            height="100%"
            width="100%"
          >
            <Typography
              variant="h2"
              color="Secondary"
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
            {/* <Grid container className={styles.gridContainer}> */}
            {/* <Grid
              item
              xs={6}
              alignItems="center"
              justify="center"
              className={styles.grid}
            > */}
            <RouterLink href="/blog" text="Blog" className={styles.link} />
            {/* </Grid> */}
            {/* <Grid
              item
              xs={6}
              alignItems="center"
              justify="center"
              className={styles.grid}
            > */}
            <RouterLink href="/about" text="About" className={styles.link} />
            {/* </Grid> */}
            {/* <Grid
              item
              xs={12}
              alignItems="center"
              justify="center"
              className={styles.grid}
            > */}
            <RouterLink
              href="/portfolio"
              text="Portfolio"
              className={styles.link}
            />
            {/* </Grid> */}
            {/* </Grid> */}
          </Box>
        </Container>
      </Zoom>
    </>
  );
}
