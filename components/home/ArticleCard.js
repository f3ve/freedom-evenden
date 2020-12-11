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
import ReactMarkdown from 'react-markdown';

const ArticleCard = ({ article }, props) => {
  return (
    <Grid item key={article.id} {...props}>
      <Card variant='outlined'>
        <CardHeader title={article.title} />
        <CardMedia image='https://picsum.photos/seed/picsum/200/300' />
        <CardContent>
          <ReactMarkdown source={article.content} sourcePos />
          {/* <Typography variant='body1' component='p' gutterBottom>
            {article.content}
          </Typography> */}
        </CardContent>
        <CardActionArea>
          <Button endIcon={<ArrowRightAltIcon />}>Read More</Button>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
