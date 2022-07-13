/**
 *
 * This Component will display's a dropdown.
 *
 */
import { Box, MenuItem, Select, SelectProps, Typography } from '@mui/material';
import React from 'react';

export interface IMenuItem {
  label: string | number; // menu item label
  value?: string | number; // menu item value
  disabled?: boolean; // is menu item disabled?
}

type TSelectBoxProps = SelectProps & {
  items: Array<IMenuItem>; // array of menu items
  label?: string; // will give a title to selectbox
  onlyValue?: boolean; // will only pass label as values
  mt?: number | string; // give margin top to selectbox
};

const SelectBox = (props: TSelectBoxProps) => {
  const { items, label, mt = 2, onlyValue = false, ...rest } = props;
  return (
    <Box sx={{ mt: mt }}>
      <Typography sx={{ fontWeight: 700, fontSize: '12px' }}>
        {label}
      </Typography>
      <Select fullWidth {...rest}>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            disabled={item.disabled ?? false}
            value={onlyValue ? item.label : item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectBox;
