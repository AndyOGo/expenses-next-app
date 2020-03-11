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
      res.status(200).json(expense);
      break;

    case 'PUT':
      const item = expenses.update(eid, body);

      res.status(200).json(item);
      break;

    case 'DELETE':
      expenses.delete(eid);

      res.status(204).end('No Content');
      break;

    default:
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
