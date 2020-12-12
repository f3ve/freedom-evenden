import { Fade, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiGet } from '../../services/ArticleApiService';

const ArticlePage = () => {
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      apiGet(`articles/${slug}`)
        .then((res) => setArticle(res))
        .catch((err) => {
          console.log('An error occured: ', err);
          setError(err);
        });
    }
  }, [slug]);

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Fade in={!!article}>
      <Typography>Article Page</Typography>
    </Fade>
  );
};

export default ArticlePage;
