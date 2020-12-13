import { Box, Slide } from '@material-ui/core';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../Theme';

const useStyles = makeStyles((theme) => ({
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
              value: 100,
            },
            size: {
              value: 3,
            },
          },
        }}
        style={{
          height: '10000px',
          position: 'absolute',
        }}
      />
    </Box>
  );
};

export default CustomBackground;
