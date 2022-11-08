import { taskService } from "../../../src/services/task.service";

export default async function handler(req, res) {
  const { limit } = req.query;
  const tasks = await (
    await taskService.listWithusers(limit)
  ).toArray();
  res.status(200).json(tasks);
}
