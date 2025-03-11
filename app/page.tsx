import PatientForm from '../components/PatientForm';
import QueueList from '../components/QueueList';

export default function Home() {
  return (
    <div>
      <h1>Patient Queue Management</h1>
      <PatientForm />
      <QueueList />
    </div>
  );
}