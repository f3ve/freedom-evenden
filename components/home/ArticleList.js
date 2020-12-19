import { Grid } from '@material-ui/core';
import ArticleCard from './ArticleCard';

export default function ArticleList(props) {
  return (
    <Grid container spacing={6} direction="column" {...props}>
      <>
        {props.articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </>
    </Grid>
  );
}
