import ExpensesForm from '../components/expenses/ExpensesForm';
import ExpensesTable from '../components/expenses/ExpensesTable';

export default function Index() {
  return (
    <div>
      <ExpensesForm />

      <ExpensesTable />
    </div>
  );
}
