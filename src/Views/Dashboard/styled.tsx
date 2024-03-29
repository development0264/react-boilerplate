import { Box, styled } from '@mui/material';

export const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: `${theme.spacing(2)} 0`,
  alignItems: 'center',
  borderRadius: '10px',
  fontSize: '22px',
  color: '#222222',
  margin: '0 auto',
  height: '15vh',
  boxShadow: '0 0 5px #aaa',
  position: 'relative',
  '& div:nth-of-type(1)': {
    width: '70px',
    height: '70px',
    position: 'absolute',
    left: '5%',
    top: '-20%',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '56px',
  },
  '& div:nth-of-type(2)': {
    position: 'absolute',
    left: '40%',
    width: '60%',
    top: '10%',
    transform: 'translateX(-3px)',
    '& *': {
      textAlign: 'center',
    },
  },
  [theme.breakpoints.down('md')]: {
    height: '12vh',
    '& div:nth-of-type(1)': {
      width: '55px',
      height: '55px',
      position: 'absolute',
      left: '5%',
      top: '-20%',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '36px',
    },
    '& div:nth-of-type(2)': {
      position: 'absolute',
      left: '36%',
      width: '60%',
      top: '10%',
      transform: 'translateX(-3px)',
      '& *': {
        fontSize: '10px',
        textAlign: 'center',
      },
      '& h1': {
        fontSize: '32px',
      },
    },
  },
}));
