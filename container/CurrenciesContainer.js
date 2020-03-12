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
    const timeLabel = 'Load currencies';
    try {
      console.time(timeLabel);
      const response = await fetch(
        'https://openexchangerates.org/api/currencies.json'
      );
      console.timeLog(timeLabel);
      const data = await response.json();
      const currencies = Object.keys(data)
        .map(code => ({ code, name: data[code] }))
        .sort();

      console.timeLog(timeLabel);
      this.setState(
        {
          currencies,
        },
        () => {
          console.info('%cLoaded currencies %o', 'color: green;', currencies);
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
    console.count('Currencies error');
    console.groupEnd();

    const { errors } = this.state;

    this.setState({
      errors: [...errors, error],
    });
  }
}
