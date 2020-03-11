import BSNavbar from '../components/bootstrap/BSNavbar/BSNavbar';
import BSCard from '../components/bootstrap/BSCard/BSCard';
import ExpensesForm from '../components/expenses/ExpensesForm';
import ExpensesTable from '../components/expenses/ExpensesTable';

export default function Index() {
  return (
    <div>
      <BSNavbar bg="dark" variant="dark">
        <BSNavbar.Brand>Expenses</BSNavbar.Brand>
      </BSNavbar>

      <BSCard>
        <BSCard.Header>
          <ExpensesForm />
        </BSCard.Header>

        <BSCard.Body>
         <ExpensesTable />
        </BSCard.Body>
      </BSCard>
    </div>
  );
}
