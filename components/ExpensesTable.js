import React from 'react'
import { Subscribe } from 'unstated'
import ExpensesContainer from '../container/ExpensesContainer'

const ExpensesTable = () => (
  <Subscribe to={[ExpensesContainer]}>
    {(expenses) => {
      return (
        <table>
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Transaction Date</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(expenses.state.expenses) && expenses.state.expenses.map(({ recipient, type, amount, currency, transaction_date}) => (
              <tr>
                <td>{recipient}</td>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                <td>{transaction_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }}
  </Subscribe>
);

export default ExpensesTable
