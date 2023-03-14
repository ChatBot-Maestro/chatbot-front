// imports here
import ButtonAtom from '../../atoms/Button.js';
export default function Dashboard() {
  console.log('in dashboard');

  return (
    <div class="dashboard-main m-1">
      <h1>dashboard</h1>
      <ButtonAtom />
    </div>
  );
}