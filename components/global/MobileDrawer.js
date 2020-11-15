import { Divider, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../Theme';
import RouterLink from './RouterLinks';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: colors.overlay,
    padding: theme.spacing(2),
  },
  link: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    opacity: 2,
  },
}));

const MobileDrawer = ({ open, showDrawer }) => {
  const styles = useStyles();
  return (
    <Drawer
      open={open}
      onClose={() => showDrawer(false)}
      anchor='left'
      classes={{
        paper: styles.paper,
      }}
    >
      <RouterLink
        href='/about'
        text='About Me'
        className={styles.link}
        variant='h5'
      />
      <Divider />
      <RouterLink
        href='/blog'
        text='Blog'
        className={styles.link}
        variant='h5'
      />
      <Divider />
      <RouterLink
        href='/videos'
        text='Videos'
        className={styles.link}
        variant='h5'
      />
      <Divider />
      <RouterLink
        text='Portfolio'
        href='/portfolio'
        className={styles.link}
        variant='h5'
      />
    </Drawer>
  );
};

export default MobileDrawer;
