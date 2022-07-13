/**
 *
 * This is a common modal component which is useful for
 * getting user input and all other needs.
 *
 * The Confirm Modal is dependent of this modal
 *
 */
import { Close } from '@mui/icons-material';
import {
  Button,
  IconButton,
  Modal as ModalOverlay,
  Typography,
} from '@mui/material';
import { ModalBody, ModalFooter, ModalHeader, ModalWrapper } from './styled';
import loader from '../../../Assets/Images/loaderImage.png';
import { LocalLoader } from '../Loader/styled';
interface IModalProps {
  open: boolean; // this is requred attribute and will manage modal open close status.
  handleClose: any; // this is requred attribute and will manage modal close.
  onSubmit: Function; // this is requred attribute and will manage modal open submit button.
  message?: string; // pass the message which you want to show to user.
  disableSubmit?: boolean; // this will disable submit button.
  header?: string; // pass the title of modal
  children?: JSX.Element | JSX.Element[] | string; // if you want to add any other components you can pass them as children.
  submitButtonText?: string; // text of submit button
  localLoading?: boolean; // this will show loading in modal
  sx?: any; // custom style to pass in modal
}

const Modal = (props: IModalProps) => {
  const {
    header,
    disableSubmit,
    submitButtonText,
    open,
    onSubmit,
    handleClose,
    children,
    sx,
    localLoading = false,
  } = props;
  return (
    <ModalOverlay
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrapper sx={sx}>
        {header && (
          <ModalHeader>
            <Typography variant="h5">{header}</Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </ModalHeader>
        )}
        <ModalBody>
          {localLoading && (
            <LocalLoader>
              <img alt="" src={loader} />
            </LocalLoader>
          )}
          {children}
        </ModalBody>
        {submitButtonText && (
          <ModalFooter>
            <Button
              color="secondary"
              sx={{ mr: 2 }}
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={disableSubmit}
              onClick={() => onSubmit && onSubmit()}
            >
              {submitButtonText}
            </Button>
          </ModalFooter>
        )}
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
