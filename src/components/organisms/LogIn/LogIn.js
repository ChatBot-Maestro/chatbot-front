// imports here
import ButtonAtom from '../../atoms/Button.js';
export default function Dashboard() {
  console.log('in LogIn');

  return (
    <div class="m-1">
      <h1>LogIn</h1>
      {/* Calling Atoms for testing */}
      <ButtonAtom />
    </div>
  );
}