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
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%' }}
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
