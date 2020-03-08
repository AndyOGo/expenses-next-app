import expenses from '../../../../data/expenses';

export default (req, res) => {
  const {
    method,
    query: { eid },
    body,
  } = req;
  const expense = expenses.find(eid);

  if (!expense) {
    res.status(404).end(`Expense ${eid} Not Found!`);
    return;
  }

  switch (method) {
    case 'GET':
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(expense)
      break

    case 'PUT':
      const item = expenses.update(eid, body);

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(item)
      break

    case 'DELETE':
      expenses.delete(eid);
      res.statusCode = 204
      break

    default:
      res.setHeader('Allow', ['PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
