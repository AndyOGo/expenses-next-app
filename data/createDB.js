import { v4 as uuidv4 } from 'uuid';

const withId = (item) => {
  if (!item.id) {
    item.id = uuidv4();
  }

  return { ...item };
}

const createDB = (initialData = []) => {
  const data = initialData.map((item) => withId(item));

  class DB {
    insert(item) {
      const newItem = withId(item);

      data.push(newItem);

      return newItem;
    }

    find(_id) {
      if (_id) {
        const result = data.filter(({ id }) => id === _id);
        const [item] = result;

        return item;
      }

      return data;
    }

    update(_id, item) {
      const oldItem = this.find(_id);

      if (oldItem) {
        const newItem = withId(item);

        data.splice(data.indexOf(oldItem), 1, newItem);

        return newItem;
      }
    }

    delete(_id) {
      const oldItem = this.find(_id);

      if (oldItem) {
        data.splice(data.indexOf(oldItem), 1);
      }
    }
  }

  return new DB();
}

export default createDB;
