/**
 *
 * This loader will rotate the image
 * passed here.
 *
 * you can change it as you needed.
 *
 */

import { Box } from '@mui/material';
import React from 'react';
import loader from '../../../Assets/Images/loaderImage.png';
import { LoaderWrapper } from './styled';

const Loader = () => {
  return (
    <Box>
      <LoaderWrapper>
        <img alt="" src={loader} />
      </LoaderWrapper>
    </Box>
  );
};

export default Loader;
