import { Grid, Typography, Divider } from '@material-ui/core';

const RecentVideos = () => {
  return (
    <Grid item>
      <Typography variant='h4' gutterBottom component='h2' color='secondary'>
        Recent Videos
      </Typography>
      <Divider />
      <Typography>I am also on YouTube! You can subscribe any time</Typography>
    </Grid>
  );
};

export default RecentVideos;
