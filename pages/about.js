/* eslint-disable react/no-unescaped-entities */
import { Avatar, Container, Fade, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
}));

const about = () => {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>About Freedom</title>
        <meta
          name='description'
          content='Learn about Freedom and how to contact him, also see a cute picture of his cat!'
        />
        <meta
          name='keywords'
          content='freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog, about freedom evenden, contact freedom evenden, contact, about, about freedom, contact freedom'
        />
      </Head>
      <Fade in>
        <Container maxWidth='sm' className={styles.container}>
          <Avatar
            src='/images/9A1C5BC0-339D-43CD-816A-3E9C3CD47FA0.jpg'
            className={styles.img}
          />
          <Typography color='secondary' variant='h2' gutterBottom>
            About Me
          </Typography>
          <Typography color='textPrimary'>
            I am a Full-Stack Web Developer secializing in React and Python. I
            first learned how to code as an apprentice in Thinkful's Full-Stack
            Engineer course and after that landed a job as a Lead Engineer on
            subscription based video streaming service. Lately I have been
            working on mobile app development with React-Native and in my free
            time I have been experimenting with web design and UX. I like to
            share my knowledge via my blog and making tutorials on YouTube.
          </Typography>
          <Typography color='textPrimary'>
            Also this is my cat, Oliver!
          </Typography>
          <Avatar
            src='/images/IMG_1248.jpg'
            className={styles.img}
            variant='rounded'
          />
        </Container>
      </Fade>
    </>
  );
};

export default about;
