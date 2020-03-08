import React from 'react'
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
import { Subscribe } from 'unstated'
import ExpensesContainer from '../container/ExpensesContainer'
import CurrenciesContainer from '../container/CurrenciesContainer'

const ExpensesForm = () => (
  <Subscribe to={[ExpensesContainer, CurrenciesContainer]}>
    {(expenses, currencies) => {
      return (<Form
        onSubmit={expenses.insert}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>Recipient</label>
            <Field name="recipient" component="input" type="text" placeholder="Recipient"
            required minLength={3} maxLength={100} tooLong="That recipient is too long!"/>

            <label>Type</label>
            <Field name="type" component="select" placeholder="Type"
            required>
              <option value="food">Food</option>
              <option value="drinks">Drinks</option>
              <option value="other">Other</option>
            </Field>

            <label>Amount</label>
            <Field name="amount" component="input" type="number" placeholder="Amount"
            min={0} step={0.01} required />

            <label>Currency</label>
            <Field name="type" component="select" placeholder="Type"
            required>
              {Array.isArray(currencies.state.currencies) && currencies.state.currencies.map(({ code, name }, index) => (
                <option value={code} key={`${code}-${index}`}>{`${code} - ${name}`}</option>
              ))}
            </Field>

            <label>Transaction Date</label>
            <Field name="transaction_date" component="input" type="date" placeholder="Transaction Date"
            required />
          </form>
        )}
      />);
    }}
  </Subscribe>
);

export default ExpensesForm
