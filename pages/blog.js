import { Box, Collapse, Container, Fade, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import ArticleCard from '../components/home/ArticleCard';
import { apiGet } from '../services/ArticleApiService';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2),
  },
}));

const blog = () => {
  const styles = useStyles();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiGet('articles/?page_size=20')
      .then((res) => setData(res))
      .catch((err) => {
        console.log('An error occured:', err);
        setError(true);
      });
  }, []);

  return (
    <Fade in>
      <Container maxWidth='md'>
        <Collapse in={error}>
          <Typography color='error'>
            Uh oh! Looks like something went wrong. Refresh the page or try
            again later.
          </Typography>
        </Collapse>
        {data &&
          data.results.map((article) => {
            return (
              <>
                <Box className={styles.box}>
                  <ArticleCard article={article} />
                </Box>
              </>
            );
          })}
      </Container>
    </Fade>
  );
};

export default blog;
