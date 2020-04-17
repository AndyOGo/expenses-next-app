import PropTypes from 'prop-types';

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

const ChangeLanguageLink = ({ locale, onClick, ...props }) => (
  <a
    {...props}
    onClick={event => {
      event.preventDefault();
      i18n.changeLanguage(locale);
      onClick(event);
    }}
  />
);

function Index({ t, currentLanguage }) {
  return (
    <div>
      <BSNavbar bg="dark" variant="dark">
        <BSNavbar.Brand>{t('Expenses')}</BSNavbar.Brand>

        <BSNav>
          <BSNavDropdown title={t('Select Language')}>
            <BSNavDropdown.Item
              active={currentLanguage === 'en'}
              href="/"
              as={ChangeLanguageLink}
              locale="en"
            >
              EN
            </BSNavDropdown.Item>
            <BSNavDropdown.Item
              active={currentLanguage === 'de'}
              href="/de"
              as={ChangeLanguageLink}
              locale="de"
            >
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
          <ExpensesTable currentLanguage={currentLanguage} />
        </BSCard.Body>
      </BSCard>
    </div>
  );
}

Index.getInitialProps = async ({ req }) => ({
  currentLanguage: req ? req.language : i18n.language,
  namespacesRequired: ['common'],
});

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Index);
