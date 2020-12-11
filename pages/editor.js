import { useState } from 'react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import CodeBlock from '../components/editor/CodeBlock';
import Paragraph from '../components/editor/Paragraph';
import Heading from '../components/editor/Heading';
import { postArticle } from '../services/ArticleApiService';
import markdownLink from '../components/editor/markdownLink';

const useStyles = makeStyles(() => ({
  input: {
    width: '100%',
  },
  grid: {
    padding: 50,
  },
}));

const editor = () => {
  const styles = useStyles();
  const [value, setValue] = useState(
    'Start by writing some markup in the input on the left'
  );
  const [title, setTitle] = useState('Markup Text Editor');
  const today = format(new Date(), 'yyyy-MM-dd');
  const [publish_date, setPublishDate] = useState(today);

  const submitArticle = (draft) => {
    const data = {
      title,
      content: value,
      slug: title.toLowerCase().replace(/ /gi, '_'),
      draft,
      publish_date,
    };
    console.log(data);
    postArticle('articles', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Container className={styles.grid}>
          <TextField
            label='Title'
            variant='filled'
            color='secondary'
            value={title}
            className={styles.input}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            label='Markup Text Editor'
            variant='filled'
            color='secondary'
            multiline
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className={styles.input}
          />
          <Button
            onClick={() => submitArticle(false)}
            color='secondary'
            variant='contained'
          >
            Publish
          </Button>
          <Button
            onClick={() => submitArticle(true)}
            color='secondary'
            variant='outlined'
          >
            Draft
          </Button>
          <TextField
            id='date'
            label='Publish Date'
            type='date'
            defaultValue={today}
            onChange={(e) => setPublishDate(e.target.value)}
          />
        </Container>
      </Grid>
      <Grid item xs={6}>
        <Container className={styles.grid}>
          <Heading text={title} level={2} />
          <ReactMarkdown
            source={value}
            renderers={{
              code: CodeBlock,
              paragraph: Paragraph,
              heading: Heading,
              link: markdownLink,
            }}
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default editor;
