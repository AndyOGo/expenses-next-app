import createDB from './createDB';

const expenses = [
  {
    transaction_date: '',
    amount: 10,
    recipient: 'Dow Jones',
    currency: 'CHF',
    type: 'other',
  },
];

export default createDB('expenses', expenses);
