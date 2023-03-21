import { Select, InputLabel, MenuItem } from "@mui/material/*";

const DropdownAtom = (props) => {
  return (
    /*
        Props guide:
        id: id of the dropdown
        idInput: id of the input
        name: name of the dropdown
        elements: array of elements to be displayed
         */
    <div className="dropdownElement">
      <InputLabel id={props.idInput}>{props.name}</InputLabel>
      <Select id={props.id} label={props.label}>
        {props.elements.map((element) => (
          <MenuItem value={element}>{element}</MenuItem>
        ))}
      </Select>
    </div>
  );
};
