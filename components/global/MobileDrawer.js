/* 
  Side drawer for mobile devices, only rendered on small screens
*/

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import DescriptionIcon from '@material-ui/icons/Description';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.overlay.main,
    padding: theme.spacing(2),
    '& li': {
      color: theme.palette.primary.main,
    },
  },
  link: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    opacity: 2,
  },
}));

export default function MobileDrawer({ open, showDrawer }) {
  const styles = useStyles();
  const router = useRouter();
  const themeContext = useContext(ThemeContext);

  function handleLinkClick(href) {
    showDrawer(false);
    router.push(href);
  }

  return (
    <Drawer
      open={open}
      onClose={() => showDrawer(false)}
      anchor="left"
      classes={{
        paper: styles.paper,
      }}
    >
      <List>
        <ListItem onClick={() => handleLinkClick('/about')}>
          <ListItemIcon>
            <InsertEmoticonIcon color="primary" />
          </ListItemIcon>
          <ListItemText>About Me</ListItemText>
        </ListItem>
        <Divider />
        <ListItem onClick={() => handleLinkClick('/blog')}>
          <ListItemIcon>
            <DescriptionIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </ListItem>
        <Divider />
        <ListItem onClick={() => handleLinkClick('/portfolio')}>
          <ListItemIcon>
            <BusinessCenterIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Portfolio</ListItemText>
        </ListItem>
        <Divider />
        <ListItem onClick={() => themeContext.changeTheme()}>
          <ListItemIcon>
            {themeContext.mode === 'dark' ? (
              <Brightness4Icon color="primary" />
            ) : (
              <Brightness7Icon color="primary" />
            )}
          </ListItemIcon>
          <ListItemText>
            {themeContext.mode === 'dark' ? 'Light mode' : 'Dark mode'}
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}
