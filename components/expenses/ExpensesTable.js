import React from 'react';
import { Subscribe } from 'unstated';

import { withTranslation } from '../../i18n';
import { BSContainer } from '../bootstrap/BSGrid/BSGrid';
import Table from '../table/Table';
import ExpensesContainer from '../../container/ExpensesContainer';

const ExpensesTable = ({ t, currentLanguage }) => {
  const columns = React.useMemo(
    language => [
      {
        Header: t('Recipient'),
        accessor: 'recipient',
      },
      {
        Header: t('Type'),
        accessor: 'type',
      },
      {
        Header: t('Amount'),
        accessor: 'amount',
      },
      {
        Header: t('Currency'),
        accessor: 'currency',
      },
      {
        Header: t('Transaction Date'),
        accessor: ({ transaction_date }) =>
          new Date(transaction_date).toLocaleDateString(),
        // accessor: 'transaction_date',
        // sortType: 'datetime',
      },
    ],
    [currentLanguage]
  );

  return (
    <Subscribe to={[ExpensesContainer]}>
      {expenses => {
        return (
          <BSContainer>
            <h2>{t('All expenses')}</h2>
            <Table
              columns={columns}
              data={expenses.state.expenses}
              onDelete={expenses.delete}
              deleteText={t('Delete')}
            />
          </BSContainer>
        );
      }}
    </Subscribe>
  );
};

export default withTranslation('common')(ExpensesTable);
