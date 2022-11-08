import { Filter, FindOptions, Document, FindCursor, WithId } from "mongodb";
import { Task } from "../interfaces/Task";
import { DataService } from "./dataService";

export class TaskService extends DataService<Task> {
  constructor() {
    super("tasks");
  }

  async listWithusers(limit = 10) {
    return await (
      await this.collection()
    )
      .aggregate([
        {
          $lookup: {
            from: "users",
            localField: "assignee",
            foreignField: "email",
            as: "user",
          },
        },
        { $unwind: "$user" },
      ])
      .limit(limit);
  }
}

export const taskService = new TaskService();
