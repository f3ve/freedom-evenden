import { useState } from 'react';
import { format } from 'date-fns';
import cookie from 'cookie';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/styles';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import jwt from 'jsonwebtoken';
import CodeBlock from '../../components/editor/CodeBlock';
import Heading from '../../components/editor/Heading';
import { postArticle } from '../../services/ArticleApiService';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
  },
  grid: {
    backgroundColor: theme.palette.background.main,
    height: '100%',
    color: theme.palette.text.primary,
    boxShadow: `0 0 100px 100px ${theme.palette.background.main}`,
  },
}));

export default function Editor() {
  const styles = useStyles();
  const [value, setValue] = useState(
    'Start by writing some markup in the input on the left'
  );
  const [title, setTitle] = useState('Markup Text Editor');
  const [publish_date, setPublishDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  const [description, setdescription] = useState('');

  function submitArticle(draft) {
    const data = {
      title,
      content: value,
      draft,
      publish_date,
      description,
    };
    console.log(data);
    postArticle('articles', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Container className={styles.grid}>
          <TextField
            label="Title"
            variant="filled"
            color="secondary"
            value={title}
            className={styles.input}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            label="Markup Text Editor"
            variant="filled"
            color="secondary"
            multiline
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className={styles.input}
          />
          <TextField
            label="description"
            color="secondary"
            variant="filled"
            multiline
            defaultValue="Summarize your article. Keep in mind this is the first thing users will read."
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            maxLength={280}
            error={description.length >= 280}
            helperText={`${description.length}/280`}
            className={styles.input}
          />
          <Button
            onClick={() => submitArticle(false)}
            color="secondary"
            variant="contained"
          >
            Publish
          </Button>
          <Button
            onClick={() => submitArticle(true)}
            color="secondary"
            variant="outlined"
          >
            Save Draft
          </Button>
          <TextField
            id="date"
            label="Publish Date"
            type="date"
            defaultValue={publish_date}
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
              heading: Heading,
            }}
          />
        </Container>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps({ req }) {
  const cookies = cookie.parse(req.headers.cookie);
  return jwt.verify(cookies.authcookie, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      return { redirect: { destination: '/admin', permanent: false } };
    }
    if (data.user) {
      return {
        props: { user: data.user },
      };
    }
  });
}
