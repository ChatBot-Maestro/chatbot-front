import React, { useState } from 'react';

function CheckAtom({ label, checked, onChange, options }) {
  const [checkboxValues, setCheckboxValues] = useState(checked || []);

  const handleCheckboxChange = (value, isChecked) => {
    const updatedChecked = isChecked
      ? [...checkboxValues, value]
      : checkboxValues.filter((item) => item !== value);
    setCheckboxValues(updatedChecked);
    onChange(updatedChecked);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checkboxValues.includes(option.id)}
            onChange={(e) => handleCheckboxChange(option.id, e.target.checked)}
          />
          <span>{option.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CheckAtom;
