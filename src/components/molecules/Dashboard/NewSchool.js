import { useState, useEffect } from 'react';
import TextFieldAtom from '../../atoms/TextField.js';
import SelectInput from '../../atoms/SelectInput.js';
import ButtonAtom from '../../atoms/Button.js';
import TextAtom from "../../atoms/Text.js";
import CheckAtom from '../../atoms/CheckAtom.js';
import MdiIconAtom from '../../atoms/MDI.js';
import { mdiClose } from '@mdi/js';
import { API_ENDPOINT } from "../../../config.js";

export default function NewSchool(props) {
  const {fields} = props;
  useEffect(() => {
    // Set initial data if received as props
    if (props.initialData !== {}) {
      setSelectedValues(props.initialData);
    }
  }, [props.initialData]);

  const handleAdd = () => {
    // Add logic here
    props.toggleModal(); // Call the toggleModal function passed from the parent
  };

  const [selectedValues, setSelectedValues] = useState({});
  const [checkboxValues, setCheckboxValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const handleCheckboxChange = (fieldName, checked) => {
    setCheckboxValues({
      ...checkboxValues,
      [fieldName]: checked
    });
    checkFormValidity();
  };

  const handleSelectChange = (fieldName, value) => {
    setSelectedValues({
      ...selectedValues,
      [fieldName]: value
    });
    checkFormValidity();
  };

  const handleTextFieldChange = (fieldName, value) => {
    setSelectedValues({
      ...selectedValues,
      [fieldName]: value
    });
    checkFormValidity();
  };

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  const checkFormValidity = () => {
    for (const field of fields) {
      if (field.required && (!selectedValues[field.name] || selectedValues[field.name] === "")) {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  };
  

  const handleSave = async () => {
    if (!isFormValid) {
      return;
    }
    checkboxValues['shifts'].forEach(shift => {
      if(shift === 1){
        selectedValues['has_morning_hours'] = true;
      }
      if(shift === 2){
        selectedValues['has_afternoon_hours'] = true;
      }
    });

    if(selectedValues['has_morning_hours'] === undefined){
      selectedValues['has_morning_hours'] = false;
    }
    if(selectedValues['has_afternoon_hours'] === undefined){
      selectedValues['has_afternoon_hours'] = false;
    }

    let url = '/api/schools/schools/';
    let methodUsed = 'POST';
    
    if(!isObjectEmpty(props.initialData)){
      methodUsed = 'PUT';
      url = url + props.initialData.id + '/';
      //delete id object in selectedValues
      delete selectedValues.id;
    }
    await fetch(API_ENDPOINT + url, {
      method: methodUsed,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedValues)
    });

    // Reset selectedValues state
    setSelectedValues({});
    checkFormValidity();

    // Close modal
    props.toggleModal();
  };

  return (
    <div className="new-user">
      <div className="d-flex justify-content-between mb-3">
        <TextAtom text="Nuevo Colegio" weight="bold" align="left" size="22px"/>
        <MdiIconAtom onClick={handleAdd} path={mdiClose} size={1} spin={false} cursor="pointer"/>
      </div>
      <div className="new-user__fields">
        {fields.map((field, index) => (
          field.type === 'select' ? (
            <SelectInput
              key={index}
              label={field.label}
              value={selectedValues[field.name] || ''}
              onChange={(event) => handleSelectChange(field.name, event.target.value)}
              required={false}
              options={field.options}
              isObject={field.isObject}
            />
          ) :  field.type === "checkbox" ? (
            <CheckAtom
              key={index}
              label={field.label}
              checked={checkboxValues[field.name] || []}
              onChange={(checkedValues) => handleCheckboxChange(field.name, checkedValues)}
              options={field.options.map(option => ({ id: option.id, name: option.name }))} // Update the options prop
            />
          ) : ( <TextFieldAtom
              key={index}
              label={field.label}
              type={field.type}
              minLength="1"
              maxLength="200"
              value={selectedValues[field.name] || ''}
              onChange={(event) => handleTextFieldChange(field.name, event.target.value)}
            />
          )
        ))}
      </div>
      <div className='new-user__save'>
        <ButtonAtom label="Guardar" variant='contained' textColor={'white'} width={'200px'} onClick={handleSave} disabled={!isFormValid}/>
      </div>
    </div>
  );
}

