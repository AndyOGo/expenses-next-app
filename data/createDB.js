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

      console.log(data);

      return newItem;
    }

    find(_id) {
      if (_id) {
        console.log(data);
        const item = data.find(({ id }) => id === _id);

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
