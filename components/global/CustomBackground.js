import { Box } from '@material-ui/core';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../Theme';

const useStyles = makeStyles(() => ({
  Box: {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    zIndex: -1,
    backgroundColor: colors.background,
  },
}));

const CustomBackground = () => {
  const styles = useStyles();
  return (
    <Box className={styles.Box}>
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
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
    </Box>
  );
};

export default CustomBackground;
