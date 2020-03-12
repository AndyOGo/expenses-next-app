import { Container } from 'unstated';
import fetch from '../utils/fetch';

const getExpensesApi = id =>
  `http://localhost:3000/api/v1/expenses${id ? `/${id}` : ''}`;

export default class ExpensesContainer extends Container {
  state = {
    loading: false,
    expenses: [],
    errors: [],
  };

  constructor() {
    super();

    this.find();
  }

  find = async id => {
    try {
      const response = await fetch(getExpensesApi());
      const expenses = await response.json();

      this.setState(
        {
          expenses,
        },
        () => {
          console.info('%cFound expenses %o', 'color: green;', expenses);
        }
      );
    } catch (error) {
      this.handleError(error);
    }
  };

  insert = async item => {
    try {
      const { recipient, type, amount, currency, transaction_date } = item;

      console.assert(recipient, 'Recipient is required!', recipient);
      console.assert(
        recipient.length >= 3,
        'Recipient is too short!',
        recipient.length
      );

      console.assert(type, 'Type is required!', type);

      console.assert(amount, 'Amount is required!', amount);
      console.assert(amount > 0, 'Amount is lower or equal to 0!', amount);

      console.assert(currency, 'Currency is required!');

      console.assert(
        transaction_date,
        'Transaction date is required!',
        transaction_date
      );
      console.assert(
        new Date(transaction_date),
        "Transaction date can't be parsed!",
        new Date(transaction_date)
      );

      const response = await fetch(getExpensesApi(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const expense = await response.json();
      const { expenses } = this.state;

      this.setState(
        {
          expenses: [...expenses, expense],
        },
        () => {
          console.info('%cInserted expense %o', 'color: green;', item);
        }
      );
    } catch (error) {
      this.handleError(error);
    }
  };

  update = async id => {
    console.warn('Update expense not implemented yet.');
  };

  delete = async _id => {
    try {
      const response = await fetch(getExpensesApi(_id), {
        method: 'DELETE',
      });

      const { expenses } = this.state;
      const newExpenses = [...expenses];
      const index = newExpenses.findIndex(({ id }) => id === _id);

      newExpenses.splice(index, 1);

      this.setState(
        {
          expenses: newExpenses,
        },
        () => {
          console.info('%cDeleted expense%c %s', 'color: green;', '', _id);
        }
      );
    } catch (error) {
      this.handleError(error);
    }
  };

  handleError(error) {
    console.error(error);

    const { errors } = this.state;

    this.setState({
      errors: [...errors, error],
    });
  }
}
