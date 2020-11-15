import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
} from '@material-ui/core';
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
          <Typography variant='h5' className={styles.title}>
            Freedom Evenden
          </Typography>
          <Link color='secondary' className={styles.link}>
            About Me
          </Link>
          <RouterLink
            color='secondary'
            href='/blog'
            text='Blog'
            className={styles.link}
          />
          <RouterLink
            color='secondary'
            href='/videos'
            text='Videos'
            className={styles.link}
          />
          <RouterLink
            color='secondary'
            text='Portfolio'
            href='/portfolio'
            className={styles.link}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
