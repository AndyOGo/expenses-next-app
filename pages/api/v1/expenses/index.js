import { v4 as uuidv4 } from 'uuid';
import expenses from '../../../../data/expenses';

export default (req, res) => {
  const { method, body } = req

  switch (method) {
    case 'GET':
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(expenses.find()))
      break

    case 'POST':
      const item = expenses.insert(body);

      res.statusCode = 201
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(item))
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
