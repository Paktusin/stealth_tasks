import { Db, Document, Filter, FindOptions } from "mongodb";
import { connection } from "../../db";

export class DataService<T extends Document> {
  db: Promise<Db>;

  constructor(private name: string) {
    this.db = connection.then((c) => c.db("test"));
  }

  async collection() {
    return (await this.db).collection(this.name);
  }

  async get(id: string): Promise<T | null> {
    return (await this.collection()).findOne<T>({ id });
  }

  async list(filter: Filter<T>, options?: FindOptions) {
    return (await this.collection()).find(filter, options);
  }

  async save(value: T) {
    if (!value.id) {
      return (await this.collection()).insertOne(value);
    } else {
      return (await this.collection()).updateOne(
        { id: value.id },
        { ...value }
      );
    }
  }

  async delete(id: string) {
    return (await this.collection()).deleteOne({ id });
  }
}
