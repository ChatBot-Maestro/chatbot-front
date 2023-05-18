import { useState, useEffect, useCallback } from 'react';
import TextFieldAtom from '../../atoms/TextField.js';
import SelectInput from '../../atoms/SelectInput.js';
import ButtonAtom from '../../atoms/Button.js';
import TextAtom from "../../atoms/Text.js";
import MdiIconAtom from '../../atoms/MDI.js';
import { mdiClose } from '@mdi/js';
import { API_ENDPOINT } from "../../../config.js";

export default function NewHomework(props) {
  const {fields} = props;
  
  const [selectedValues, setSelectedValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const checkFormValidity = useCallback(() => {
    for (const field of fields) {
      if (field.required && (!selectedValues[field.name] || selectedValues[field.name] === "") && field.type !== 'checkbox') {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  });

  useEffect(() => {
    // Set initial data if received as props
    if (!isObjectEmpty(props.initialData)) {
      setSelectedValues(props.initialData);
    }
    checkFormValidity();
  }, [props.initialData, isFormValid, checkFormValidity]);

  const handleAdd = () => {
    // Add logic here
    props.toggleModal(); // Call the toggleModal function passed from the parent
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

  const handleSave = async () => {
    let url = '/api/homeworks/homeworks/';
    let methodUsed = 'POST';
    
    if(!isObjectEmpty(props.initialData)){
      url = url + props.initialData.id + '/';
      methodUsed = 'PUT';
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

    // Close modal
    props.toggleModal();
  };

  return (
    <div className="new-user">
      <div className="d-flex justify-content-between mb-3">
        <TextAtom text="Nueva Tarea" weight="bold" align="left" size="22px"/>
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
          ) : (
            <TextFieldAtom
              key={index}
              label={field.label}
              type={field.type}
              minLength="1"
              maxLength="20"
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

