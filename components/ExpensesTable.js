import React from 'react'
import { Subscribe } from 'unstated'
import ExpensesContainer from '../container/ExpensesContainer'

const ExpensesTable = () => (
  <Subscribe to={[ExpensesContainer]}>
    {(expenses) => {
      return (<table></table>)
    }}
  </Subscribe>
);

export default ExpensesTable
