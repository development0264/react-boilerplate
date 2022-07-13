/**
 *
 * This is Custom tooltip.
 *
 */

import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

const CustomToolTip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    textAlign: 'center',
  },
}));

export default CustomToolTip;
