import Head from 'next/head';
import { makeStyles } from '@material-ui/styles';
import { Box, Container, Fade, Typography, Zoom } from '@material-ui/core';
import RouterLink from '../components/global/RouterLinks';

const useStyles = makeStyles((theme) => ({
  img: {
    height: 250,
    width: 250,
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>Freedom Evenden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Fade in>
        <Container maxWidth='md'>
          <Box
            display='flex'
            flexDirection='column'
            paddingTop={10}
            alignItems='center'
            height='100%'
            width='100%'
          >
            <Typography variant='h2' color='Secondary' gutterBottom>
              Freedom Evenden
            </Typography>
            <Typography variant='body1' color='textPrimary'>
              I write code and I love cats
            </Typography>
            <RouterLink href='/blog' text='Blog' />
            <RouterLink href='/portfolio' text='Portfolio' />
            <RouterLink href='/about' text='About Me' />
          </Box>
        </Container>
      </Fade>
    </>
  );
}
