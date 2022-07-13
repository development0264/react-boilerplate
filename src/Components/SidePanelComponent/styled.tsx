import { Box, styled } from '@mui/material';

export const MenuItemWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  textTransform: 'capitalize',
  color: '#fff',
  '& p': {
    marginTop: '2px',
    marginLeft: '15px',
    color: '#fff',
  },
  '& div': {
    display: 'flex',
  },
}));

export const MenuWrapper = styled(Box)(({ theme }) => ({
  paddingTop: '15px',
  background: theme.palette.primary.main,
  height: '100vh',
  '& a': {
    textDecoration: 'none',
  },
  '& .active > div': {
    background: theme.palette.secondary.main,
    color: '#fff',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
