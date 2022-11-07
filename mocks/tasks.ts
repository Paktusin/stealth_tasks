import { Task } from "../src/interfaces/Task";
import { v4 } from "uuid";
import { users } from "./users";
import { statuses } from "../src/interfaces/Status";

export const tasks = Array(100)
  .fill(null)
  .map(
    (_, index) =>
      ({
        id: v4(),
        assignee: users[Math.random() * users.length],
        title: "Test task",
        description: "",
        related: [],
        status: statuses[Math.random() * statuses.length],
        createdAt: new Date().valueOf() + index * 60 * 36000,
      } as Task)
  );
