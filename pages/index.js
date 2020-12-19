import Head from 'next/head';
import { Box, Container, Typography, Zoom } from '@material-ui/core';
import RouterLink from '../components/global/RouterLinks';

export default function Home() {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Zoom in>
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
      </Zoom>
    </>
  );
}
