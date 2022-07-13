import { Box, styled } from '@mui/material';

export const ModalWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '40vw',
  background: theme.palette.common.white,
  borderRadius: '10px',
  [theme.breakpoints.down('lg')]: {
    width: '70vw',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90vw',
  },
}));

export const ModalHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderBottom: '1px solid #ccc',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.palette.secondary.main,
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}));

export const ModalBody = styled(Box)(({ theme }) => ({
  padding: '24px 32px',
  maxHeight: '65vh',
  overflow: 'auto',
}));

export const ModalFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderTop: '1px solid #ccc',
  textAlign: 'right',
}));
