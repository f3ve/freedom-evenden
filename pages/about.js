/* 
  About page. Display my picture and links to my socials and email.
*/

/* eslint-disable react/no-unescaped-entities */
import { Box, Container, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { getImage } from '@plaiceholder/next';
import { getBase64 } from '@plaiceholder/base64';
import Image from 'next/image';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
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
  imgPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 200,
    height: 200,
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'blur(8px)',
    transform: 'scale(1.1)',
    borderRadius: 100,
  },
  imgContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    overflow: 'hidden',
    borderRadius: 100,
  },
}));

export default function About({ imgBase64, imgSrc }) {
  const styles = useStyles();

  return (
    <>
      <Head>
        <title>About Freedom</title>
        <meta
          name="description"
          content="Learn about Freedom and how to contact him, also see a cute picture of his cat!"
        />
      </Head>
      <Container maxWidth="sm" className={styles.container}>
        <Box>
          <div className={styles.imgContainer}>
            <img
              aria-hidden="true"
              alt=""
              src={imgBase64}
              className={styles.imgPlaceholder}
            />
            <Image
              src={imgSrc}
              alt="a picture of Freeedom Evenden"
              width={200}
              height={200}
              priority
              className={styles.img}
            />
          </div>
        </Box>
        <Typography color="secondary" variant="h2" gutterBottom>
          About Me
        </Typography>
        <Box component="address">
          <IconButton
            color="primary"
            target="_blank"
            href="https://www.linkedin.com/in/freedom-evenden-dev/"
            aria-label="Freedom's LinkedIn"
            rel="noopener"
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
            href="mailto:free.eve@protonmail.com"
            aria-label="email Freedom"
            rel="noopener"
          >
            <EmailIcon />
          </IconButton>
        </Box>
        <Typography color="textPrimary" gutterBottom>
          Freedom is a full-stack web developer with experience building
          responsive, mobile-first applications with Vue.js, React.js, Node.js,
          Express, Python, Django, and PostgreSQL.
        </Typography>

        <Typography color="textPrimary" gutterBottom>
          When he's not writing code he's usualy spending time with his wife, at
          the gym, or conquering his foes in strategy games.
        </Typography>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const imgSrc = '/images/9A1C5BC0-339D-43CD-816A-3E9C3CD47FA0.jpg'; // image from public directory

  /* 
    Generate LQIP
  */
  const img = await getImage(imgSrc);
  const imgBase64 = await getBase64(img);

  return {
    props: {
      imgBase64, // placeholder image
      imgSrc, // main image
    },
  };
}
