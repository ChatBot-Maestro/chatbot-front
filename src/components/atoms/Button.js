// imports here
import Button from '@mui/material/Button';

const ButtonAtom = (props) => {
  return(
    <Button id={props.id} variant={props.variant} color={ props.color } >{props.text}</Button>
  );
}

export default ButtonAtom;
