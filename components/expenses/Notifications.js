import { useState } from 'react';
import { Subscribe } from 'unstated';
import TimeAgo from 'react-timeago';

import BSToast from '../bootstrap/BSToast/BSToast';
import ExpensesContainer from '../../container/ExpensesContainer';
import CurrenciesContainer from '../../container/CurrenciesContainer';

const Notification = ({ children, header }) => {
  const [show, setShow] = useState(true);
  const [date] = useState(Date.now());

  return (
    <BSToast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <BSToast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{header}</strong>
        <small>
          <TimeAgo date={date} />
        </small>
      </BSToast.Header>
      <BSToast.Body>{children}</BSToast.Body>
    </BSToast>
  );
};

const Notifications = () => {
  return (
    <Subscribe to={[ExpensesContainer, CurrenciesContainer]}>
      {(expenses, currencies) => (
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: 1000,
              top: '10px',
              right: '10px',
            }}
          >
            {Array.isArray(expenses.state.errors) &&
              expenses.state.errors.map((error, index) => (
                <Notification header="Error" key={index}>
                  {error.message}
                </Notification>
              ))}

            {Array.isArray(currencies.state.errors) &&
              currencies.state.errors.map((error, index) => (
                <Notification header="Error" key={index}>
                  {error.message}
                </Notification>
              ))}
          </div>
        </div>
      )}
    </Subscribe>
  );
};

export default Notifications;
