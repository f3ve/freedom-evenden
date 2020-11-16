import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const ArticleCard = ({ post }) => {
  return (
    <Grid item key={post.id}>
      <Card variant='outlined'>
        <CardHeader title={post.title} />
        <CardMedia image='https://picsum.photos/seed/picsum/200/300' />
        <CardContent>
          <Typography variant='body1' component='p' gutterBottom>
            {post.content}
          </Typography>
        </CardContent>
        <CardActionArea>
          <Button
            // variant='contained'
            // color=''
            endIcon={<ArrowRightAltIcon />}
          >
            Read More
          </Button>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
