import { Box } from '@material-ui/core';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../Theme';

const useStyles = makeStyles(() => ({
  Box: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    zIndex: -1,
    backgroundColor: colors.black,
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
              value: 30,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 1,
              outMode: 'out',
            },
            lineLinked: {
              enable: false,
            },
            polygon: {
              nb_sides: 6,
            },
          },
          interactivity: {
            onHover: {
              enabled: true,
              mode: 'repluse',
            },
            onClick: {
              enabled: true,
              mode: 'repluse',
            },
            detectsOn: 'parent',
          },
        }}
        style={{
          position: 'absolute',
        }}
      />
    </Box>
  );
};

export default CustomBackground;
