import { v4 as uuidv4 } from 'uuid';
import expenses from '../../../../data/expenses';

export default (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(expenses.find());
      break;

    case 'POST':
      const item = expenses.insert(body);

      res.status(201).json(item);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
