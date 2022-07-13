import { Box, styled } from '@mui/material';

export const LoginWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  bottom: '0',
}));
