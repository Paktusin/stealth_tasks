import React from "react";
import { Layout } from "../../src/components/Layout";
import { TaskView } from "../../src/components/TaskView";
import { toObject } from "../../src/hooks/toObject";
import { Task } from "../../src/interfaces/Task";
import { taskService } from "../../src/services/task.service";

export default function TaskViewPage({
  task,
  related,
}: {
  task: Task;
  related: Task[];
}) {
  return (
    <Layout>
      <TaskView task={task} related={related}></TaskView>
    </Layout>
  );
}

export async function getServerSideProps(ctx: any) {
  const task = (await taskService.getInfo(ctx.params.id)) as Task;
  const related = await (
    await (await taskService.related(task.related)).toArray()
  ).map(toObject);
  return {
    props: { task: toObject(task), related },
  };
}
