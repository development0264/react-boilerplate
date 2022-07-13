/**
 *
 * This component is core in this boilerplate,
 * because all pages are created within this component.
 *
 */

import React from 'react';
import { Box, Button, PaperProps, Typography } from '@mui/material';
import { PanelHeader, PanelWrapper } from './styled';
type IPanelProps = PaperProps & {
  header?: string; // the title of panel or page
  headerComponent?: JSX.Element | JSX.Element[]; // pass if you want to have components in panel header.
  children: JSX.Element | JSX.Element[] | string; // panel childrens
  buttonText?: string; // this will add a button on right side on panel with text passed here
  onButtonClick?: () => void; // this is button handler
};

const Panel = (props: IPanelProps) => {
  const {
    header,
    children,
    buttonText,
    variant,
    onButtonClick,
    headerComponent,
  } = props;
  return (
    <PanelWrapper variant={variant ?? 'outlined'}>
      {header && (
        <PanelHeader>
          {header && (
            <Typography variant="h6" fontWeight={700}>
              {header}
            </Typography>
          )}
          {headerComponent && headerComponent}
          {buttonText && (
            <Button variant="contained" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </PanelHeader>
      )}
      <Box sx={{ p: 3 }}>{children}</Box>
    </PanelWrapper>
  );
};

export default Panel;
