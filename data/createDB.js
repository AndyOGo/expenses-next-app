import { v4 as uuidv4 } from 'uuid';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const withId = (item) => {
  if (!item.id) {
    item.id = uuidv4();
  }

  return { ...item };
}

const createDB = (path, initialData = []) => {
  const data = initialData.map((item) => withId(item));
  const adapter = new FileSync('db.json');
  const db = low(adapter);

  db.defaults({ expenses: data }).write()

  class DB {
    insert(item) {
      const newItem = withId(item);

      db.get(path)
        .push(newItem)
        .write()

      return newItem;
    }

    find(id) {
      if (id) {
        return db.get(path)
          .find({ id })
          .value()
      }

      return db.get(path)
        .value();
    }

    update(id, item) {
      const newItem = withId(item);

      db.get(path)
        .find({ id })
        .assign(newItem)
        .write()

      return newItem;
    }

    delete(id) {
      db.get(path)
        .remove({ id })
        .write()
    }
  }

  return new DB();
}

export default createDB;
