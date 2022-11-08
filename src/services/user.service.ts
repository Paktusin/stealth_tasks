import { User } from "next-auth";
import { DataService } from "./dataService";

export class UserService extends DataService<User> {
  cache = new Map<string, User>();

  constructor() {
    super("users");
  }

  async findCached(email: string) {
    if (this.cache.has(email)) {
      return Promise.resolve(this.cache.get(email));
    }
    return (await this.collection()).findOne<User>({ email });
  }
}

export const userService = new UserService();
