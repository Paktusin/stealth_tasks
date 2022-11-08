import { ObjectId, AggregateOptions } from "mongodb";
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
        {
          $lookup: {
            from: "tasks",
            localField: "related",
            foreignField: "_id",
            as: "relatedTasks",
          },
        },
        { $unwind: "$user" },
      ])
      .toArray();
    return tasks[0];
  }

  async related(ids: string[]) {
    const objectIds = ids.map((id) => new ObjectId(id));
    return this.listWithusers([{ $match: { _id: { $in: objectIds } } }]);
  }

  async listWithusers(extended?: any) {
    const options = [
      { $sort: { createdAt: -1 } },
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
    ];
    if (extended) {
      options.push(...extended);
    }
    return await (await this.collection()).aggregate(options);
  }
}

export const taskService = new TaskService();
