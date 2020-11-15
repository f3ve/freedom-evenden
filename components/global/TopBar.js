import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RouterLink from './RouterLinks';

const TopBar = () => {
  return (
    <AppBar style={{ backgroundColor: '#000000' }}>
      <Toolbar>
        <Typography variant='h3'>Freedom Evenden</Typography>
        <IconButton color='secondary'>
          <MenuIcon color='inherit' />
        </IconButton>
        <RouterLink color='secondary' href='/' text='yeet' />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
