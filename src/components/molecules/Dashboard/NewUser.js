import TextFieldAtom from '../../atoms/TextField.js';
import ButtonAtom from '../../atoms/Button.js';
import TextAtom from "../../atoms/Text.js";
import MdiIconAtom from '../../atoms/MDI.js';
import { mdiClose } from '@mdi/js';
export default function NewUser(props) {
    const handleAdd = () => {
        // Add logic here
        props.toggleModal(); // Call the toggleModal function passed from the parent
      };
    var userSelected = props.selectedUser.singleName;
    console.log(props);

    return(
        <div className="new-user">
            <div className="d-flex justify-content-between mb-3">
                <TextAtom text={`Nuevo ${userSelected}`} weight="bold" align="left" size="22px"/>
                <MdiIconAtom onClick={handleAdd} path={mdiClose} size={1} spin={false} cursor="pointer"/>
            </div>
            {/* Render the fields from the user and add the logic to add the user to the database and do for to TextFieldAtom*/}
            <TextFieldAtom label="Nombre" minLength="1" maxLength="6"/>
            <TextFieldAtom label="Apellido" minLength="1" maxLength="6"/>
            <TextFieldAtom label="Número" minLength="1" maxLength="6"/>
            <div className='new-user__save'>
            <ButtonAtom label="Guardar" variant = 'contained' textColor={'white'} width={'200px'}/>
            </div>
        </div>
    );
}