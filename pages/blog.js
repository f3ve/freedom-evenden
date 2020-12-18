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

export default function blog({ data }) {
  const styles = useStyles();
  const [error, setError] = useState(false);

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
}

export async function getStaticProps(context) {
  const data = await apiGet('articles/?page_size=20');
  return {
    props: { data },
  };
}
