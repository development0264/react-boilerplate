/**
 *
 * This is main layout container of the app.
 * which will gives you a view with header,sidebar and responsiveness
 *
 * ====only made changes in this component if it's required.====
 *
 */

import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../Components';
import { drawerWidth } from '../Components/HeaderComponent';
import withAuth from '../HOC/withAuth';

interface ILayoutProps {}

const LayoutContainer = (props: ILayoutProps) => {
  return (
    <>
      <HeaderComponent />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: {
            sm: 3,
            xs: 1,
          },
          width: {
            sm: `calc(100vw - ${drawerWidth}px)`,
          },
          height: 'auto',
          marginLeft: { sm: `${drawerWidth - 5}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};

export default withAuth(LayoutContainer);
