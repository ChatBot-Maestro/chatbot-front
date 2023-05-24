import { useState, useEffect } from 'react';
import TextFieldAtom from '../../atoms/TextField.js';
import SelectInput from '../../atoms/SelectInput.js';
import ButtonAtom from '../../atoms/Button.js';
import TextAtom from "../../atoms/Text.js";
import MdiIconAtom from '../../atoms/MDI.js';
import { mdiClose } from '@mdi/js';
import { API_ENDPOINT } from "../../../config.js";

export default function NewSchedule(props) {
  const {fields} = props;

  const [selectedValues, setSelectedValues] = useState({});
  const [showingValues, setShowingValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const checkFormValidity = () => {
    for (const field of fields) {
      if(field.type === 'search' && field.required && (!showingValues[field.name] || showingValues[field.name] === "")){
        setIsFormValid(false);
        return;
      }
      if (field.required && (!selectedValues[field.name] || selectedValues[field.name] === "") && field.type !== 'search') {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  };

  useEffect(() => {
    // Set initial data if received as props
    if (props.initialData !== {}) {
      setSelectedValues(props.initialData);
    }
    checkFormValidity();
  }, [props.initialData]);

  const handleAdd = () => {
    // Add logic here d
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

  const handleSearchBoxChange = (fieldName, value) => {
    setShowingValues({
      ...showingValues,
      [fieldName]: value
    });
    checkFormValidity();
  };

  function onSearchClick(searchTerm, field){

    setShowingValues({
      ...showingValues,
      [field.name]: searchTerm.data
    });

    setSelectedValues({
      ...selectedValues,
      [field.name]: searchTerm.id
    });
    checkFormValidity();
  }


  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const handleSave = async () => {
    let url = '/api/teachers/schedules/';
    let methodUsed = 'POST';
    
    if(!isObjectEmpty(props.initialData)){
      url = url + props.initialData.id + '/';
      methodUsed = 'PUT';
      //delete id object in selectedValues
      delete selectedValues.id;
      delete selectedValues.teacher_name;
    }
    const response = await fetch(API_ENDPOINT + url, {
      method: methodUsed,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedValues)
    });
    if(response.status === 201 || response.status === 200){
      props.handleFetchResponse({ success: true});
    } else{
      props.handleFetchResponse({ success: false});
    }
    // Reset selectedValues state
    setSelectedValues({});

    // Close modal
    props.toggleModal();
  };
  const buttonText = isObjectEmpty(props.initialData) ? 'Nuevo' : 'Editar';

  return (
    <div className="new-user">
      <div className="d-flex justify-content-between mb-3">
        <TextAtom text={`${buttonText} Horario`} weight="bold" align="left" size="22px"/>
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
            />
          ): field.type === "search" ? (
            <div className="search-container">
              <div className="search-inner">
              <TextFieldAtom
                  key={index}
                  label={field.label}
                  type={field.type}
                  minLength="1"
                  maxLength="20"
                  value={showingValues[field.name] || ''}
                  onChange={(event) => handleSearchBoxChange(field.name, event.target.value)}
                />
              </div>
              <div className="dropdown">
                {field.info.filter(item => {
                  try {
                    const searchTerm = showingValues[field.name].toLowerCase();
                    const fullName = item.data.toLowerCase();
                    return searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm;
                  } catch (error) {
                  }

                })
                .map((item)=> (<div className='dropdown-row' onClick={() => onSearchClick(item,field)}>
                  {item.data}
                </div>)).slice(0,3)}
              </div>
            </div> 
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

