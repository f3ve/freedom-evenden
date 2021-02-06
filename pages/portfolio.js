import { Container, makeStyles } from '@material-ui/core';
import { getBase64 } from '@plaiceholder/base64';
import Head from 'next/head';
import Project from '../components/projects/Project';
import { getProjects } from '../services/ArticleApiService';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
}));

export default function portfolio({ projects }) {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>Freedom - Portfolio</title>
        <meta name="author" content="Freedom Evenden" />
        <meta
          name="description"
          content="Freedom Evenden's web development portfolio"
        />
        <meta
          name="keywords"
          content="freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog"
          key="app"
        />
      </Head>
      <Container maxWidth="md" component="ul" className={styles.container}>
        {projects.map((p) => (
          <Project p={p} key={p.title} />
        ))}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  await Promise.all(
    projects.map(async (p, i) => {
      const res = await fetch(p.img);
      const buffer = await res.buffer();
      const img = await getBase64(buffer);
      projects[i].placeholderImg = img;
    })
  );

  return {
    props: { projects },
  };
}
