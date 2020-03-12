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

      this.setState({
        expenses,
      });
    } catch (error) {
      this.handleError(error);
    }
  };

  insert = async item => {
    try {
      const response = await fetch(getExpensesApi(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const expense = await response.json();
      const { expenses } = this.state;

      this.setState({
        expenses: [...expenses, expense],
      });
    } catch (error) {
      this.handleError(error);
    }
  };

  update = async id => {};

  delete = async _id => {
    try {
      const response = await fetch(getExpensesApi(_id), {
        method: 'DELETE',
      });

      const { expenses } = this.state;
      const newExpenses = [...expenses];
      const index = newExpenses.findIndex(({ id }) => id === _id);

      newExpenses.splice(index, 1);

      this.setState({
        expenses: newExpenses,
      });
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
