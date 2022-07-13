import { Box, Paper, styled } from '@mui/material';

export const PanelWrapper = styled(Paper)(({ theme }) => ({
  minHeight: 'calc(100vh - 120px)',
  borderRadius: '20px',
  boxShadow: '0 0 5px #22222261',
}));

export const PanelHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
}));
