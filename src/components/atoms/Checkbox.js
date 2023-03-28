import { Checkbox } from "@mui/material";

/*
Props guide:
    label: Text to indicate the checkbox
    lbPlacement: Position of the label(bottom, end, start, top)
    id: ID of the checkbox
    color: Color of the checkbox
    size: Size of the checkbox(small, medium, large)
    status1: Status of the checkbox(diabled, checked, indeterminate)
    status2: Status of the checkbox(diabled, checked, indeterminate) add to the previous status
*/

const CheckboxAtom = (props) => {
    return(
        <Checkbox label={props.label} labelPlacement={props.lbPlacement} id={props.id} color={props.color} size={props.size} {...props.status1} {...props.status2}/>
    );
}