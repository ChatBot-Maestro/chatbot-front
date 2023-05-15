import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Toast = (props) => {
  const { severity, title, text, open, onClose } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
        sx={{ top: '0', left: '0', right: '0', position: 'absolute' }}
      >
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </MuiAlert>
    </Snackbar>
  );
};

export default Toast;
