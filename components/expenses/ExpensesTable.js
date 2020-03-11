import React from 'react'
import { Subscribe } from 'unstated'
import { BSContainer } from '../bootstrap/BSGrid/BSGrid';
import Table from '../table/Table';
import ExpensesContainer from '../../container/ExpensesContainer'

const ExpensesTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Recipient',
        accessor: 'recipient',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Currency',
        accessor: 'currency',
      },
      {
        Header: 'Transaction Date',
        accessor: 'transaction_date',
        // sortType: 'datetime',
      },
    ],
    []
  );

  return (
    <Subscribe to={[ExpensesContainer]}>
      {(expenses) => {

        return (
          <BSContainer>
            <Table columns={columns} data={expenses.state.expenses} onDelete={expenses.delete} />
          </BSContainer>
        )
      }}
    </Subscribe>
  );
}

export default ExpensesTable
