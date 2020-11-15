import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import RouterLink from './RouterLinks';
import MobileDrawer from './MobileDrawer';
import { colors } from '../../Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: colors.white,
  },
  link: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
}));

const TopBar = () => {
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [drawer, showDrawer] = useState(false);

  return (
    <div className={styles.root}>
      {!matches && <MobileDrawer open={drawer} showDrawer={showDrawer} />}
      <AppBar style={{ backgroundColor: colors.black }}>
        <Toolbar>
          <Typography variant='h5' className={styles.title}>
            Freedom Evenden
          </Typography>
          {!matches && (
            <IconButton
              color='primary'
              edge='start'
              className={styles.menuButton}
              onClick={() => showDrawer((cur) => !cur)}
            >
              <MenuIcon color='inherit' />
            </IconButton>
          )}
          {matches && (
            <>
              <RouterLink
                href='/about'
                text='About Me'
                className={styles.link}
              />
              <RouterLink href='/blog' text='Blog' className={styles.link} />
              <RouterLink
                href='/videos'
                text='Videos'
                className={styles.link}
              />
              <RouterLink
                text='Portfolio'
                href='/portfolio'
                className={styles.link}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
