import { Grid, Typography, Divider } from '@material-ui/core';

export default function RecentVideos() {
  return (
    <Grid item>
      <Typography variant="h4" gutterBottom component="h2" color="primary">
        Recent Videos
      </Typography>
      <Divider />
      <Typography>
        I am also on YouTube! You can subscribe any time. Similar to my blog
        content I make tutorials and guides for developers of all levels
      </Typography>
    </Grid>
  );
}
