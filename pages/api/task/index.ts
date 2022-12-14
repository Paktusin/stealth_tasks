import { taskService } from "../../../src/services/task.service";

export default async function handler(req, res) {
  const { limit = 10, skip = 0 } = req.query;
  const tasks = await (
    await taskService.listWithusers([{ $skip: +skip }, { $limit: +limit }])
  ).toArray();
  res.status(200).json(tasks);
}
