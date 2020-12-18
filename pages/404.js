/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Container,
  Fade,
  makeStyles,
  Typography,
} from '@material-ui/core';
import RouterLinks from '../components/global/RouterLinks';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
  },
}));

export default function NotFound() {
  const styles = useStyles();

  return (
    <Fade in>
      <Container maxWidth='md' className={styles.container}>
        <Typography variant='h2' color='secondary' gutterBottom>
          404
        </Typography>
        <Typography variant='body1' color='textPrimary' gutterBottom>
          Oops, Looks like this page doesn't exist. But don't worry! Here is a
          picture of my cat.
        </Typography>
        <Avatar
          src='/images/IMG_1248.jpg'
          className={styles.img}
          variant='rounded'
        />
        <RouterLinks text='Click here to go back to the site' href='/' />
      </Container>
    </Fade>
  );
}
