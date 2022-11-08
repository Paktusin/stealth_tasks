import { taskService } from "../../../src/services/task.service";

export default async function handler(req, res) {
  const { id } = req.query;
  let task;
  if (id) {
    task = await taskService.getInfo(id);
  }
  if (!task) {
    res.status(404).end();
  } else {
    return res.json(task);
  }
}
