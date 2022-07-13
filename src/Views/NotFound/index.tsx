/**
 *
 * This view will show A page with 404 Error
 *
 */

import { Box, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent } from '../../Components';
import { drawerWidth } from '../../Components/HeaderComponent';
import Panel from '../../Components/UI/Panel';

const NotFoundWrapper = styled(Box)({
  width: '100%',
  height: 'calc(100vh - 254px)',
  display: 'flex',
  padding: '20px 0',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const NotFound = () => {
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
        <Panel>
          <NotFoundWrapper>
            <Box sx={{ m: 5 }}>
              <Typography variant="h3">404 Not Found</Typography>
            </Box>
            <Link to="/">Back To Home Page</Link>
          </NotFoundWrapper>
        </Panel>
      </Box>
    </>
  );
};

export default NotFound;
