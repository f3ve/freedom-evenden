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
import RouterLink from './RouterLinks';
import MobileDrawer from './MobileDrawer';
import { colors } from '../../Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(20),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: colors.white,
    fontFamily: 'Noto Sarif',
  },
  link: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  appBar: {
    backgroundColor: colors.black,
    boxShadow: `0 0 20px 20px ${colors.white}`,
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
      <AppBar className={styles.appBar}>
        <Container maxWidth='md'>
          <Toolbar>
            <Typography variant='h4' className={styles.title} noWrap>
              Freedom Evenden
            </Typography>
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
        </Container>
      </AppBar>
    </div>
  );
};

export default TopBar;
