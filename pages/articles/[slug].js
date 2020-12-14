import { Container, Fade, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/editor/CodeBlock';
import Heading from '../../components/editor/Heading';
import markdownLink from '../../components/editor/markdownLink';
import Paragraph from '../../components/editor/Paragraph';
import { apiGet } from '../../services/ArticleApiService';
import { colors } from '../../Theme';

const useStyles = makeStyles((theme) => ({
  mdWidth: {
    maxWidth: 800,
  },
  container: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: theme.spacing(5),
    height: '100%',
    color: colors.white,
    boxShadow: `0 0 200px 2px black`,
  },
}));

const ArticlePage = () => {
  const styles = useStyles();
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
      <Container
        maxWidth='md'
        className={styles.container}
        classes={{
          maxWidthMd: styles.mdWidth,
        }}
      >
        {article && (
          <>
            <Heading text={article.title} level={2} />
            <ReactMarkdown
              source={article.content}
              renderers={{
                code: CodeBlock,
                paragraph: Paragraph,
                heading: Heading,
                link: markdownLink,
              }}
            />
          </>
        )}
      </Container>
    </Fade>
  );
};

export default ArticlePage;
