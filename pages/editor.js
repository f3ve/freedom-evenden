import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, TextField } from '@material-ui/core';
import CodeBlock from '../components/editor/CodeBlock';
import Paragraph from '../components/editor/Paragraph';
import Heading from '../components/editor/Heading';

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
    '## Markup Text Editor\n\nStart by writing some markup in the input on the left'
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Container className={styles.grid}>
          <TextField
            label='Markup Text Editor'
            variant='filled'
            color='secondary'
            multiline
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.input}
          />
        </Container>
      </Grid>
      <Grid item xs={6}>
        <Container className={styles.grid}>
          <ReactMarkdown
            source={value}
            renderers={{
              code: CodeBlock,
              paragraph: Paragraph,
              heading: Heading,
            }}
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default editor;
