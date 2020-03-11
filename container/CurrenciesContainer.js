import { Container } from 'unstated';
import 'cross-fetch/polyfill';

export default class CurrenciesContainer extends Container {
  state = {
    loading: false,
    currencies: [],
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

      this.setState({
        currencies,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
