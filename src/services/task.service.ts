import { Task } from "../interfaces/Task";
import { DataService } from "./dataService";

export class TaskService extends DataService<Task> {
  constructor() {
    super("tasks");
  }
}

export const taskService = new TaskService();
