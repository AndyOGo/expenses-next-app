import { Container } from 'unstated';
import 'cross-fetch/polyfill';

export default class ExpensesContainer extends Container {
  state = {
    loading: false,
    expenses: [],
  }

  constructor() {
    super()

    this.find();
  }

  async find(id) {
    try {
      const response = await fetch(`/api/v1/expenses${id ? `/${id}` : ''}`);
      const expenses = await response.json();

      this.setState({
        expenses,
      });
    } catch(error) {

    }
  }

  insert() {}

  update() {}

  delete() {}
}
