import { Container } from 'unstated';
import fetch from '../utils/fetch';

export default class CurrenciesContainer extends Container {
  state = {
    loading: false,
    currencies: [],
    errors: [],
  };

  constructor() {
    super();

    this.loadCurrencies();
  }

  loadCurrencies = async () => {
    try {
      const response = await fetch(
        'https://openexchangerates.org/api/currencies.json'
      );
      const data = await response.json();
      const currencies = Object.keys(data)
        .map(code => ({ code, name: data[code] }))
        .sort();

      this.setState(
        {
          currencies,
        },
        () => {
          console.info('%cLoaded currencies %o', 'color: green;', currencies);
        }
      );
    } catch (error) {
      this.handleError(error);
    }
  };

  handleError(error) {
    console.error(error);
    console.count('Currencies error');

    const { errors } = this.state;

    this.setState({
      errors: [...errors, error],
    });
  }
}
