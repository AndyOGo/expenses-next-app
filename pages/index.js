import BSNavbar from '../components/bootstrap/BSNavbar/BSNavbar';
import ExpensesForm from '../components/expenses/ExpensesForm';
import ExpensesTable from '../components/expenses/ExpensesTable';

export default function Index() {
  return (
    <div>
      <BSNavbar bg="dark" variant="dark">
        <BSNavbar.Brand>Expenses</BSNavbar.Brand>
      </BSNavbar>

      <ExpensesForm />

      <ExpensesTable />
    </div>
  );
}
