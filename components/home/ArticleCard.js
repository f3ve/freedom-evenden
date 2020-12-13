import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
  Grow,
  Slide,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

const ArticleCard = ({ article }, props) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/articles/${article.slug}`);
  };

  return (
    <Grow in>
      <Grid item key={article.id} {...props}>
        <Card variant='outlined'>
          <CardHeader title={article.title} />
          <CardMedia image='https://picsum.photos/seed/picsum/200/300' />
          <CardContent>
            <ReactMarkdown source={article.summary} />
          </CardContent>
          <CardActionArea>
            <Button onClick={handleClick} endIcon={<ArrowRightAltIcon />}>
              Read More
            </Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grow>
  );
};

export default ArticleCard;
