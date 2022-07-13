/**
 *
 * This is custom textbox component.
 *
 */

import { Box, TextField, Typography, TextFieldProps } from '@mui/material';
import React from 'react';

type TextBoxProps = TextFieldProps & { label?: string }; // label will give title to textbox

const TextBox = (props: TextBoxProps) => {
  const { label, sx, ...rest } = props;
  return (
    <Box sx={sx ?? { mt: 2 }}>
      {label && (
        <Typography sx={{ fontWeight: 700, fontSize: '11px' }}>
          {label}
        </Typography>
      )}
      <TextField fullWidth inputProps={{ maxLength: 30 }} {...rest} />
    </Box>
  );
};

export default TextBox;
