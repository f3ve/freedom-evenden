import { Container, Fade, Grid, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import ArticleCard from '../components/home/ArticleCard';
import { apiGet } from '../services/ArticleApiService';

const useStyles = makeStyles(() => ({}));

const blog = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const styles = useStyles();

  useEffect(() => {
    apiGet('articles/?page_size=20')
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, []);

  return (
    <Fade in={!!data}>
      <Container maxWidth='md'>
        <Grid
          container
          spacing={3}
          alignContent='space-around'
          className={styles.gridContainer}
          justify='space-between'
        >
          {data &&
            data.results.map((article) => {
              return (
                <Grid item key={article.id} xs={4}>
                  <ArticleCard article={article} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Fade>
  );
};

export default blog;
