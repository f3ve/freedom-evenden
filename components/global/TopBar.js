import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import RouterLink from './RouterLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
}));

const TopBar = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <IconButton
            color='secondary'
            edge='start'
            className={styles.menuButton}
          >
            <MenuIcon color='inherit' />
          </IconButton>
          <Typography variant='h3' className={styles.title}>
            Freedom Evenden
          </Typography>
          <RouterLink
            color='secondary'
            href='/'
            text='yeet'
            className={styles.link}
          />
          <RouterLink
            color='secondary'
            href='/blog'
            text='blog'
            className={styles.link}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
