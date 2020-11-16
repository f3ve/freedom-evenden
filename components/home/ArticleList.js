import { Grid } from '@material-ui/core';
import ArticleCard from './ArticleCard';

const ArticleList = (props) => {
  return (
    <Grid container spacing={6} direction='column' {...props}>
      <>
        {props.posts.map((post) => {
          return <ArticleCard post={post} key={post.id} />;
        })}
      </>
    </Grid>
  );
};

export default ArticleList;
