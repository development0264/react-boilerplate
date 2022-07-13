/**
 *
 * This is a simple modal which will just
 * ask the user about something to confirm.
 *
 * for example :- get confirmation on delete
 *
 */

import { Typography } from '@mui/material';
import React from 'react';
import Modal from '../Modal';

interface ConfirmModalProps {
  open: boolean; // this is requred attribute and will manage modal open close status.
  handleClose: Function; // this is requred attribute and will manage modal close.
  onSubmit: Function; // this is requred attribute and will manage modal open submit button.
  message?: string; // pass the message which you want to show to user.
  disableSubmit?: boolean; // this will disable submit button.
  header?: string; // pass the title of modal
  children?: JSX.Element | JSX.Element[] | string; // if you want to add any other components you can pass them as children.
  submitButtonText?: string; // text of submit button
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { message, children, ...rest } = props;
  return (
    <Modal {...rest}>
      {message ? <Typography>{message}</Typography> : children}
    </Modal>
  );
};
export default ConfirmModal;
