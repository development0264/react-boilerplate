import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect } from 'react';
import SidePanelComponent from '../SidePanelComponent';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../../Redux/Actions/AuthAction';
import { useNavigate } from 'react-router-dom';
import { IReduxState } from '../../utils/types';

// the width of drawer

export const drawerWidth = 240;

const HeaderComponent = () => {
  /*-------------Initailizations-------------*/

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reduxState = useSelector(
    (state: IReduxState) => state.rootReducer.AuthReducer
  );
  /*-------------Initailizations-------------*/

  /*----------------Handlers------------------*/

  // handles drawer toogle in mobile devices
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // handles logout button
  const handleLogout = async () => {
    await dispatch(LogoutAction());
  };

  // effect for logout
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [reduxState]);

  /*----------------Handlers------------------*/

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                width: { sm: '180px', xs: '120px' },
              }}
            >
              <Typography variant="h3">LOGO</Typography>
            </Box>
          </Box>
          <Button variant="text" color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          '& ::-webkit-scrollbar': {
            width: 0,
            height: '2px',
          },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <SidePanelComponent handleClick={handleDrawerToggle} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <SidePanelComponent />
        </Drawer>
      </Box>
    </Box>
  );
};
export default HeaderComponent;
