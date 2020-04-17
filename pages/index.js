import PropTypes from 'prop-types';
import Link from 'next/link';

import { i18n, withTranslation } from '../i18n';
import BSNavbar from '../components/bootstrap/BSNavbar/BSNavbar';
import BSNav from '../components/bootstrap/BSNav/BSNav';
import BSCard from '../components/bootstrap/BSCard/BSCard';
import BSNavDropdown from '../components/bootstrap/BSNavDropdown/BSNavDropdown';
import BSOverlayTrigger from '../components/bootstrap/BSOverlayTrigger/BSOverlayTrigger';
import BSTooltip from '../components/bootstrap/BSTooltip/BSTooltip';
import BSScreenReaders from '../components/bootstrap/BSScreenReaders/BSScreenReaders';
import GithubMark from '../assets/github-mark.svg';
import Notifications from '../components/expenses/Notifications';
import ExpensesForm from '../components/expenses/ExpensesForm';
import ExpensesTable from '../components/expenses/ExpensesTable';

const BSDropdownItemLink = ({ href, ...props }) => (
  <Link href={href}>
    <a {...props} />
  </Link>
);

function Index({ t }) {
  return (
    <div>
      <BSNavbar bg="dark" variant="dark">
        <BSNavbar.Brand>{t('Expenses')}</BSNavbar.Brand>

        <BSNav>
          <BSNavDropdown title={t('Select Language')}>
            <BSNavDropdown.Item href="/" as={BSDropdownItemLink}>
              EN
            </BSNavDropdown.Item>
            <BSNavDropdown.Item href="/de" as={BSDropdownItemLink}>
              DE
            </BSNavDropdown.Item>
          </BSNavDropdown>
        </BSNav>

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

      <Notifications />

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

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Index);
