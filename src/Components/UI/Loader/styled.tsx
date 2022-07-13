import { Box, styled } from '@mui/material';

export const LoaderWrapper = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    animation: 'animate 1s infinite',
  },
  height: 'calc(100vh - 254px)',
  '@keyframes animate': {
    '0%': {
      transform: 'rotateY(0)',
    },
    '100%': {
      transform: 'rotateY(360deg)',
    },
  },
});

export const LocalLoader = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  '& img': {
    animation: 'animate 1s infinite',
  },
  height: 'calc(100vh - 254px)',
  width: '75%',
  zIndex: 9999,
  '@keyframes animate': {
    '0%': {
      transform: 'rotateY(0)',
    },
    '100%': {
      transform: 'rotateY(360deg)',
    },
  },
});
