import { Container } from 'unstated';
import fetch from '../utils/fetch';

const getExpensesApi = id =>
  `http://localhost:3000/api/v1/expenses${
    typeof id === 'string' && id ? `/${id}` : ''
  }`;

export default class ExpensesContainer extends Container {
  state = {
    loading: false,
    expenses: [],
    errors: [],
  };

  constructor() {
    super();

    this.load();
  }

  load = async () => {
    const timeLabel = 'Load expenses';

    try {
      console.time(timeLabel);
      const response = await fetch(getExpensesApi());
      console.timeLog(timeLabel);
      const expenses = await response.json();

      console.timeLog(timeLabel);
      this.setState(
        {
          expenses,
        },
        () => {
          console.info('%cLoaded expenses %o', 'color: green;', expenses);
          console.timeEnd(timeLabel);
        }
      );
    } catch (error) {
      this.handleError(error);
      console.timeLog(timeEnd);
    }
  };

  insert = async item => {
    const timeLabel = 'Insert expense';

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

      console.time(timeLabel);
      const response = await fetch(getExpensesApi(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      console.timeLog(timeLabel);
      const expense = await response.json();
      const { expenses } = this.state;

      console.timeLog(timeLabel);
      this.setState(
        {
          expenses: [...expenses, expense],
        },
        () => {
          console.info('%cInserted expense %o', 'color: green;', item);
          console.timeEnd(timeLabel);
        }
      );
    } catch (error) {
      this.handleError(error);
      console.timeEnd(timeLabel);
    }
  };

  update = async id => {
    console.warn('Update expense not implemented yet.');
  };

  delete = async _id => {
    const timeLabel = 'Delete expense';

    try {
      console.time(timeLabel);
      const response = await fetch(getExpensesApi(_id), {
        method: 'DELETE',
      });

      const { expenses } = this.state;
      const newExpenses = [...expenses];
      const index = newExpenses.findIndex(({ id }) => id === _id);

      newExpenses.splice(index, 1);

      console.timeLog(timeLabel);
      this.setState(
        {
          expenses: newExpenses,
        },
        () => {
          console.info('%cDeleted expense%c %s', 'color: green;', '', _id);
          console.timeEnd(timeLabel);
        }
      );
    } catch (error) {
      this.handleError(error);
      console.timeEnd(timeLabel);
    }
  };

  handleError(error) {
    console.group();
    console.error(error);
    console.count('Expenses error');
    console.groupEnd();

    const { errors } = this.state;

    this.setState({
      errors: [...errors, error],
    });
  }
}
