/* eslint-disable react/no-unescaped-entities */
import { Box, Container, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import Image from 'next/image';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(20),
    '& p': {
      marginBottom: 20,
    },
  },
  img: {
    borderRadius: 100,
    objectFit: 'cover',
  },
}));

export default function About() {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>About Freedom</title>
        <meta
          name="description"
          content="Learn about Freedom and how to contact him, also see a cute picture of his cat!"
        />
        <meta
          name="keywords"
          content="freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog, about freedom evenden, contact freedom evenden, contact, about, about freedom, contact freedom"
        />
      </Head>
      <Container maxWidth="sm" className={styles.container}>
        <Box>
          <Image
            src="/images/9A1C5BC0-339D-43CD-816A-3E9C3CD47FA0.jpg"
            alt="a picture of Freeedom Evenden"
            width={200}
            height={200}
            priority
            className={styles.img}
          />
        </Box>
        <Typography color="secondary" variant="h2" gutterBottom zIndex={1}>
          About Me
        </Typography>
        <Box component="address">
          <IconButton
            color="primary"
            target="_blank"
            href="https://www.linkedin.com/in/freedom-evenden-dev/"
            aria-label="Freedom's LinkedIn"
            rel="noreferrer"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="primary"
            href="https://github.com/f3ve"
            target="_blank"
            aria-label="Freedom's GitHub Profile"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            href="https://twitter.com/f3veDev"
            aria-label="Freedom's twitter account"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="primary"
            href="mailto:free.eve@protonmail.com"
            aria-label="email Freedom"
            rel="noreferrer"
          >
            <EmailIcon />
          </IconButton>
        </Box>
        <Typography color="textPrimary" zIndex={1} gutterBottom>
          Freedom is a full-stack web developer with experience building
          responsive, mobile-first applications using React.js, Node.js,
          Express, Python, Django, and PostgreSQL.
        </Typography>

        <Typography color="textPrimary" zIndex={1} gutterBottom>
          When he's not writing code he's usualy spending time with his wife, at
          the gym, or conquering his foes in strategy games.
        </Typography>
      </Container>
    </>
  );
}
