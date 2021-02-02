import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Container,
  Box,
  Slide,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import RouterLink from './RouterLinks';
import MobileDrawer from './MobileDrawer';
import ThemeContext from '../../context/theme';

const useStyles = makeStyles((theme) => {
  const lightDark = theme.palette.type;
  return {
    root: {
      flexGrow: 1,
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
      backgroundColor: theme.palette.background[lightDark],
      borderBottom: `1px solid ${theme.palette.divider}`,
      boxShadow: 'none',
      zIndex: 2,
    },
  };
});

export default function TopBar() {
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [drawer, showDrawer] = useState(false);
  const [topbar, showTopbar] = useState(false);
  const router = useRouter();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (router.pathname !== '/') {
      showTopbar(true);
    } else {
      showTopbar(false);
    }
  });

  return (
    <Box className={styles.root}>
      {!matches && <MobileDrawer open={drawer} showDrawer={showDrawer} />}
      <Slide in={topbar}>
        <AppBar
          className={styles.appBar}
          position={
            router.pathname.includes('portfolio') ||
            router.pathname.includes('articles') ||
            router.pathname.includes('blog')
              ? 'fixed'
              : 'relative'
          }
        >
          <Container maxWidth="lg">
            <Toolbar>
              <Link href="/">
                <a className={styles.titleLink}>
                  <Typography
                    variant={matches ? 'h4' : 'h5'}
                    className={styles.title}
                    color="primary"
                    component="h1"
                  >
                    Freedom Evenden
                  </Typography>
                </a>
              </Link>
              {!matches && (
                <IconButton
                  color="primary"
                  edge="start"
                  variant="contained"
                  className={styles.menuButton}
                  onClick={() => showDrawer((cur) => !cur)}
                >
                  <MenuIcon color="inherit" />
                </IconButton>
              )}
              {matches && (
                <>
                  <IconButton
                    color="primary"
                    onClick={() => themeContext.changeTheme()}
                  >
                    {themeContext.mode === 'dark' ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )}
                  </IconButton>
                  <RouterLink
                    href="/blog"
                    text="Blog"
                    className={styles.link}
                    variant={
                      router.pathname === '/blog' ? 'contained' : 'outlined'
                    }
                    disabled={router.pathname === '/blog'}
                  />
                  <RouterLink
                    text="Portfolio"
                    href="/portfolio"
                    className={styles.link}
                    variant={
                      router.pathname === '/portfolio'
                        ? 'contained'
                        : 'outlined'
                    }
                    disabled={router.pathname === '/portfolio'}
                  />
                  <RouterLink
                    href="/about"
                    text="About"
                    className={styles.link}
                    variant={
                      router.pathname === '/about' ? 'contained' : 'outlined'
                    }
                    disabled={router.pathname === '/about'}
                  />
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </Box>
  );
}
