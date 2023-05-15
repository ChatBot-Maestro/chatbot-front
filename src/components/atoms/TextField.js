import React from 'react';
import TextField from '@mui/material/TextField';
import "../../styles/base/base.scss"

const TextInput = (props) => {
  const { label, value, onChange, required, minLength, maxLength, type } = props;
  const [error, setError] = React.useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Check for input rules
    if (required && inputValue.trim() === '') {
      setError(true);
    } else if (minLength && inputValue.length < minLength) {
      setError(true);
    } else if (maxLength && inputValue.length > maxLength) {
      setError(true);
    } else {
      setError(false);
    }

    onChange(event);
  };

  return (
    <TextField
      className='text-input'
      label={label}
      value={value}
      onChange={handleInputChange}
      fullWidth
      type={type}
      error={error}
      helperText={error ? 'Invalid input' : ''}
      required={required}
      inputProps={{
        minLength: minLength,
        maxLength: maxLength
      }}
    />
  );
};

export default TextInput;
