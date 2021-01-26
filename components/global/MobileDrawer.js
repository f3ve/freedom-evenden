import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import DescriptionIcon from '@material-ui/icons/Description';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.overlay,
    padding: theme.spacing(2),
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

  function handleLinkClick(href) {
    showDrawer(false);
    router.push(href);
  }

  return (
    <SwipeableDrawer
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
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText>About Me</ListItemText>
        </ListItem>
        <Divider />
        <ListItem onClick={() => handleLinkClick('/blog')}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </ListItem>
        <Divider />
        <ListItem onClick={() => handleLinkClick('/portfolio')}>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText>Portfolio</ListItemText>
        </ListItem>
        <Divider />
      </List>
    </SwipeableDrawer>
  );
}
