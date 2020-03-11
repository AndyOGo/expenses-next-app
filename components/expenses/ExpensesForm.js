import React from 'react'
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
import { Subscribe } from 'unstated'

import BSButton from '../bootstrap/BSButton/BSButton';
import { BSContainer, BSCol } from '../bootstrap/BSGrid/BSGrid';
import BSForm, { BSFormRow } from '../bootstrap/BSForm/BSForm';
import Input from '../form/Input';
import ExpensesContainer from '../../container/ExpensesContainer'
import CurrenciesContainer from '../../container/CurrenciesContainer'

import './ExpensesForm.scss';

const ExpensesForm = () => (
  <Subscribe to={[ExpensesContainer, CurrenciesContainer]}>
    {(expenses, currencies) => {
      return (<Form
        onSubmit={expenses.insert}
        initialValues={{ type: 'food', currency: 'CHF' }}
        render={({ handleSubmit }) => (
          <BSContainer>
            <BSForm onSubmit={handleSubmit}>
              <BSFormRow>
                <BSCol>
                  <Field name="recipient" label="Recipient" component={Input} type="text" placeholder="Recipient"
                  required minLength={3} maxLength={100} tooLong="That recipient is too long!"/>
                </BSCol>

                <BSCol>
                  <Field name="type" label="Type" as="select" component={Input} placeholder="Type"
                  required>
                    <option value="food">Food</option>
                    <option value="drinks">Drinks</option>
                    <option value="other">Other</option>
                  </Field>
                </BSCol>

                <BSCol>
                  <Field name="amount" label="Amount" component={Input} type="number" placeholder="Amount"
                  min={0} step={0.01} required />
                </BSCol>

                <BSCol>
                  <Field name="currency" label="Currency" as="select" component={Input} placeholder="Currency"
                  required>
                    {Array.isArray(currencies.state.currencies) && currencies.state.currencies.map(({ code, name }) => (
                      <option value={code} key={code}>{`${code} - ${name}`}</option>
                    ))}
                  </Field>
                </BSCol>

                <BSCol>
                  <Field name="transaction_date" label="Transaction Date" component={Input} type="date" placeholder="Transaction Date"
                  required />
                </BSCol>

                <BSCol className="o-expenses-form__col--center">
                  <BSButton type="submit" variant="primary">Save</BSButton>
                </BSCol>
              </BSFormRow>
            </BSForm>
          </BSContainer>
        )}
      />);
    }}
  </Subscribe>
);

export default ExpensesForm
