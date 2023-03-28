import { AlertTitle } from '@mui/material';
import Alert from '@mui/material/Alert';

/*
Props guide:
    severity: Severity of the alert (error, warning, info, success)
    title: Title of the alert
    text: Text to show in the alert
    enfatize: Text to show in the alert with a strong style
*/

const AlertAtom = (props) => {
    return(
        <Alert severity={props.severity}>
            <AlertTitle>{props.title}</AlertTitle>
            {props.text}
            <strong>{props.enfatize}</strong>
        </Alert>
    );
}