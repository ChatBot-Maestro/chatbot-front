// imports here
import ButtonAtom from '../../atoms/Button.js';
import InputAtom from '../../atoms/Input.js';
export default function Dashboard() {
  console.log('in dashboard');

  return (
    <div class="dashboard-main m-1">
      <h1>dashboard</h1>

      {/* Calling Atoms for testing */}
      <ButtonAtom />
      <InputAtom />
    </div>
  );
}