import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "../../styles/base/base.scss"

const SelectInput = (props) => {
  const { label, value, onChange, required, options, isObject } = props;
  const [error, setError] = React.useState(false);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Check for input rules
    if (required && inputValue.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
    if(isObject){
      onChange(event);
    } else {
      onChange(event);
    }
  };

  return (
    <FormControl className='select-input'>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleInputChange}
        error={error}
        required={required}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={isObject ? option.id : option}>
            {isObject ? option.name : option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
