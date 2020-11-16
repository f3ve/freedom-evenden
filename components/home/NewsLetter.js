import { Grid, Typography, Divider } from '@material-ui/core';

const NewsLetter = () => {
  return (
    <Grid item>
      <Typography variant='h4' gutterBottom component='h2' color='secondary'>
        News Letter
      </Typography>
      <Divider />
      <Typography variant='body1' component='p'>
        My goal with this blog is to provide free tutorials and tips for
        developers of all levels. By subscribing below you will get updates
        anytime I post something new. No Spam. Unsubscribe anytime
      </Typography>
    </Grid>
  );
};

export default NewsLetter;
