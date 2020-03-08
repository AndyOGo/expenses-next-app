import { Container } from 'unstated';

export default class ExpensesContainer extends Container {
  state = {
    loading: false,
    expenses: [],
  }

  constructor() {
    super()
  }

  insert() {}

  update() {}

  delete() {}
}
