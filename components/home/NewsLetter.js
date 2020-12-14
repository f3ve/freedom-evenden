import { Grid, Typography } from '@material-ui/core';

const NewsLetter = () => {
  return (
    <Grid item>
      <Typography variant='h4' gutterBottom component='h2' color='primary'>
        News Letter
      </Typography>
      <Typography variant='body1' color='textPrimary'>
        My goal with this blog is to provide free tutorials and tips for
        developers of all levels. By subscribing below you will get updates
        anytime I post something new. No Spam. Unsubscribe anytime
      </Typography>
    </Grid>
  );
};

export default NewsLetter;
