import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Container,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import Link from 'next/link';
import RouterLink from './RouterLinks';
import MobileDrawer from './MobileDrawer';
import { colors } from '../../Theme';
import CustomBackground from './CustomBackground';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: colors.white,
  },
  titleLink: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(3px)',
  },
}));

const TopBar = ({ window }) => {
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [drawer, showDrawer] = useState(false);

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <div className={styles.root}>
      {!matches && <MobileDrawer open={drawer} showDrawer={showDrawer} />}
      <Slide appear={false} in={!trigger}>
        <AppBar className={styles.appBar} position='static'>
          <Container maxWidth='lg'>
            <Toolbar>
              <Link href='/'>
                <a className={styles.titleLink}>
                  <Typography variant='h4' className={styles.title} noWrap>
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
          <CustomBackground />
        </AppBar>
      </Slide>
    </div>
  );
};

export default TopBar;
