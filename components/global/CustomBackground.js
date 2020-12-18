import { useMediaQuery, useTheme } from '@material-ui/core';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  box: {
    position: 'fixed',
    zIndex: 0,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
}));

export default function CustomBackground() {
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Particles
      className={styles.box}
      params={{
        particles: {
          number: {
            value: matches ? 20 : 10,
          },
          color: {
            value: '#ffffff',
          },
          size: {
            value: 20,
          },
          move: {
            speed: 1,
          },
          lineLinked: {
            enable: false,
          },
          shape: {
            type: 'images',
            images: [
              {
                src: '/images/javascript.png',
                width: 50,
                height: 50,
              },
              {
                src: '/images/python.png',
                width: 50,
                height: 50,
              },
              {
                src: '/images/react.png',
              },
            ],
          },
        },
      }}
    />
  );
}
