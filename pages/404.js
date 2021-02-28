/* 
  custom 404 page that renders when a page is requested that does not exist
*/

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Container, makeStyles, Typography } from '@material-ui/core';
import RouterLinks from '../components/global/RouterLinks';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    objectFit: 'cover',
    borderRadius: 150,
  },
}));

export default function NotFound() {
  const styles = useStyles();

  return (
    <Container maxWidth="md" className={styles.container}>
      <Typography variant="h2" color="secondary" gutterBottom>
        404
      </Typography>
      <Typography variant="body1" color="textPrimary" gutterBottom>
        Oops, Looks like this page doesn't exist. But don't worry! Here is a
        picture of my cat to make it better.
      </Typography>
      <Image
        src="/images/IMG_1248.jpg"
        className={styles.img}
        width={300}
        height={300}
      />
      <RouterLinks text="Click here to go back to the site" href="/" />
    </Container>
  );
}
