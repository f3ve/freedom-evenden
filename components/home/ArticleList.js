import { Grid } from '@material-ui/core';
import ArticleCard from './ArticleCard';

const ArticleList = (props) => {
  return (
    <Grid container spacing={6} direction='column' {...props}>
      <>
        {props.articles.map((article) => {
          return <ArticleCard article={article} key={article.id} />;
        })}
      </>
    </Grid>
  );
};

export default ArticleList;
