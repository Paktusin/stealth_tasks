import { taskService } from "../../../src/services/task.service";

export default async function handler(req, res) {
  const { ids } = req.query;
  console.log(ids);
  const tasks = await (await taskService.related(ids)).toArray();
  res.status(200).json(tasks);
}
