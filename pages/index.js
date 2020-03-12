import BSNavbar from '../components/bootstrap/BSNavbar/BSNavbar';
import BSNav from '../components/bootstrap/BSNav/BSNav';
import BSCard from '../components/bootstrap/BSCard/BSCard';
import BSOverlayTrigger from '../components/bootstrap/BSOverlayTrigger/BSOverlayTrigger';
import BSTooltip from '../components/bootstrap/BSTooltip/BSTooltip';
import BSScreenReaders from '../components/bootstrap/BSScreenReaders/BSScreenReaders';
import GithubMark from '../assets/github-mark.svg';
import ExpensesForm from '../components/expenses/ExpensesForm';
import ExpensesTable from '../components/expenses/ExpensesTable';

export default function Index() {
  return (
    <div>
      <BSNavbar bg="dark" variant="dark">
        <BSNavbar.Brand>Expenses</BSNavbar.Brand>

        <BSOverlayTrigger
          placement="bottom"
          delay={{ show: 200 }}
          overlay={<BSTooltip id="t-github">Github</BSTooltip>}
        >
          <BSNav.Link
            href="https://github.com/AndyOGo/expenses-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 'auto' }}
          >
            <GithubMark
              style={{ width: '40px', height: '40px', padding: '5px' }}
            />
            <BSScreenReaders>Github</BSScreenReaders>
          </BSNav.Link>
        </BSOverlayTrigger>
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
