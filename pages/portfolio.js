import { Container, Fade } from '@material-ui/core';
import Head from 'next/head';
import { projects } from '../store';
import Project from '../components/projects/Project';

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Freedom Evenden - Portfolio</title>
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
