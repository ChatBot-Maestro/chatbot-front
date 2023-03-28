// imports here
import ButtonAtom from '../../atoms/Button.js';
import LoaderAtom from '../../atoms/Loader.js';
import MdiIconAtom from '../../atoms/MDI.js';
import TextFieldAtom from '../../atoms/TextField.js';
import TextAtom from '../../atoms/Text.js';
import { mdiAccount } from '@mdi/js';
import WidgetAtom from '../../atoms/Widget.js';
import Favicon from '../../../assets/logo192.png';
export default function Dashboard() {
  console.log('in dashboard');

  return (
    <div class="dashboard-main m-1">
      <h1>dashboard</h1>

      {/* Calling Atoms for testing */}
      <ButtonAtom label="hola" variant = 'text'/>
      <ButtonAtom label="hola 2" variant = 'contained' iconPath={mdiAccount} size={2}/>
      <LoaderAtom type="spinner"/>
      <MdiIconAtom path={mdiAccount} size={2} color="red" spin={false}/>
      <TextFieldAtom label="hola" minLength="1" maxLength="6"/>
      <TextAtom text="hola" weight="normal"/>
      <WidgetAtom image={Favicon} title="My Widget" imagePosition="right" titlePosition="bottom" />
    </div>
  );
}