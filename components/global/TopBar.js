import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import Link from 'next/link';
import RouterLink from './RouterLinks';
import MobileDrawer from './MobileDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10),
    height: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleLink: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
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
      <AppBar className={styles.appBar} position='relative'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Link href='/'>
              <a className={styles.titleLink}>
                <Typography
                  variant='h4'
                  className={styles.title}
                  noWrap
                  color='primary'
                >
                  Freedom Evenden
                </Typography>
              </a>
            </Link>
            {!matches && (
              <IconButton
                color='primary'
                edge='start'
                variant='contained'
                className={styles.menuButton}
                onClick={() => showDrawer((cur) => !cur)}
              >
                <MenuIcon color='inherit' />
              </IconButton>
            )}
            {matches && (
              <>
                <RouterLink
                  href='/blog'
                  text='Blog'
                  className={styles.link}
                  variant=''
                />
                <RouterLink
                  text='Portfolio'
                  href='/portfolio'
                  className={styles.link}
                />
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default TopBar;
