import React from 'react'
import { Subscribe } from 'unstated'
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
          <>
          <Table columns={columns} data={expenses.state.expenses} onDelete={expenses.delete} />

          <table>
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Transaction Date</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {Array.isArray(expenses.state.expenses) && expenses.state.expenses.map(({ id, recipient, type, amount, currency, transaction_date}) => (
                <tr key={id}>
                  <td>{recipient}</td>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                  <td>{transaction_date}</td>
                  <td><button type="button" onClick={() => { expenses.delete(id) }}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          </>
        )
      }}
    </Subscribe>
  );
}

export default ExpensesTable
