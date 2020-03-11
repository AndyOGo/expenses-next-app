import { Container } from 'unstated';
import 'cross-fetch/polyfill';

const getExpensesApi = id =>
  `http://localhost:3000/api/v1/expenses${id ? `/${id}` : ''}`;

export default class ExpensesContainer extends Container {
  state = {
    loading: false,
    expenses: [],
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
      console.log(error);
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
      console.log(error);
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
      console.log(error);
    }
  };
}
