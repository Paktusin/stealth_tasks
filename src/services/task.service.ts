import { ObjectId } from "mongodb";
import { Task } from "../interfaces/Task";
import { DataService } from "./dataService";

export class TaskService extends DataService<Task> {
  constructor() {
    super("tasks");
  }

  async getInfo(id: string) {
    const tasks = await (
      await this.collection()
    )
      .aggregate([
        { $match: { _id: new ObjectId(id) } },
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
      .toArray();
    return tasks[0];
  }

  async listWithusers(limit = 10, skip = 0) {
    return await (
      await this.collection()
    )
      .aggregate([
        { $project: { description: 0, related: 0 } },
        {
          $lookup: {
            from: "users",
            localField: "assignee",
            foreignField: "email",
            as: "user",
          },
        },
        { $unwind: "$user" },
        { $project: { assignee: 0 } },
      ])
      .skip(skip)
      .limit(limit);
  }
}

export const taskService = new TaskService();
