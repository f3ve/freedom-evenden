import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 200,
    width: 200,
    marginBottom: theme.spacing(3),
  },

  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export default function NewsLetter() {
  const styles = useStyles();
  return (
    <Grid item className={styles.grid}>
      <Avatar
        alt='Freedom Evenden'
        src='/images/9A1C5BC0-339D-43CD-816A-3E9C3CD47FA0.jpg'
        className={styles.avatar}
      />
      <Typography variant='body1' color='textPrimary'>
        My goal with this blog is to provide free tutorials and tips for
        developers of all levels. By subscribing below you will get updates
        anytime I post something new. No Spam. Unsubscribe anytime
      </Typography>
    </Grid>
  );
}
