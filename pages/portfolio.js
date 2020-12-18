import { Container, Fade } from '@material-ui/core';
import Head from 'next/head';
import { projects } from '../store';
import Project from '../components/projects/Project';

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Freedom - Portfolio</title>
        <meta name='author' content='Freedom Evenden' />
        <meta
          name='description'
          content="Freedom Evenden's web development portfolio"
        />
        <meta
          name='keywords'
          content='freedom evenden, freedom, evenden, react, javascript, python, django, rest, react native, how to, react-native, web development, web, development, web developer, developer, software engineer, engineer, software, code, coding, coder, how to code, react.js, js, java script, java, script, portfolio, freedoms portfolio, freedom portfolio, blog, freedoms blog, freedom blog, web developer blog, web development blog, coding blog, code blog'
          key='app'
        />
      </Head>
      <Fade in>
        <Container maxWidth='md' component='ul'>
          {projects.map((p) => {
            return <Project p={p} key={p.title} />;
          })}
        </Container>
      </Fade>
    </>
  );
};

export default portfolio;
