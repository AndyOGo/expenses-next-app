import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form-html5-validation';
import { Subscribe } from 'unstated';

import { withTranslation } from '../../i18n';
import BSButton from '../bootstrap/BSButton/BSButton';
import { BSContainer, BSCol } from '../bootstrap/BSGrid/BSGrid';
import BSForm, { BSFormRow } from '../bootstrap/BSForm/BSForm';
import Input from '../form/Input';
import ExpensesContainer from '../../container/ExpensesContainer';
import CurrenciesContainer from '../../container/CurrenciesContainer';

import './ExpensesForm.scss';

const toDate = value => new Date(value);
const toDateString = date =>
  date
    ? `${date.getFullYear().toString()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, 0)}-${date
        .getDate()
        .toString()
        .padStart(2, 0)}`
    : '';
const toNumber = value => +value;
const toString = value => '' + value;

const ExpensesForm = ({ t }) => (
  <Subscribe to={[ExpensesContainer, CurrenciesContainer]}>
    {(expenses, currencies) => {
      return (
        <Form
          onSubmit={expenses.insert}
          initialValues={{ type: 'food', currency: 'CHF' }}
          render={({ handleSubmit }) => (
            <BSContainer>
              <h1>{t('Enter expense')}</h1>
              <BSForm onSubmit={handleSubmit}>
                <BSFormRow>
                  <BSCol>
                    <Field
                      name="recipient"
                      label={t('Recipient')}
                      component={Input}
                      type="text"
                      placeholder={t('Recipient')}
                      required
                      minLength={3}
                      maxLength={100}
                      tooLong="That recipient is too long!"
                    />
                  </BSCol>

                  <BSCol>
                    <Field
                      name="type"
                      label={t('Type')}
                      as="select"
                      component={Input}
                      placeholder={t('Type')}
                      required
                    >
                      <option value="food">{t('Food')}</option>
                      <option value="drinks">{t('Drinks')}</option>
                      <option value="other">{t('Other')}</option>
                    </Field>
                  </BSCol>

                  <BSCol>
                    <Field
                      name="amount"
                      label={t('Amount')}
                      component={Input}
                      type="number"
                      placeholder={t('Amount')}
                      format={toString}
                      parse={toNumber}
                      min={0}
                      step={0.01}
                      required
                    />
                  </BSCol>

                  <BSCol>
                    <Field
                      name="currency"
                      label={t('Currency')}
                      as="select"
                      component={Input}
                      placeholder={t('Currency')}
                      required
                    >
                      {Array.isArray(currencies.state.currencies) &&
                        currencies.state.currencies.map(({ code, name }) => (
                          <option
                            value={code}
                            key={code}
                          >{`${code} - ${name}`}</option>
                        ))}
                    </Field>
                  </BSCol>

                  <BSCol>
                    <Field
                      name="transaction_date"
                      label={t('Transaction Date')}
                      component={Input}
                      type="date"
                      placeholder={t('Transaction Date')}
                      format={toDateString}
                      parse={toDate}
                      required
                    />
                  </BSCol>

                  <BSCol className="o-expenses-form__col--center">
                    <BSButton type="submit" variant="primary">
                      {t('Save')}
                    </BSButton>
                  </BSCol>
                </BSFormRow>
              </BSForm>
            </BSContainer>
          )}
        />
      );
    }}
  </Subscribe>
);

ExpensesForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(ExpensesForm);
