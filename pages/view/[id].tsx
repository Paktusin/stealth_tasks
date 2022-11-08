import React from "react";
import { Layout } from "../../src/components/Layout";
import { TaskView } from "../../src/components/TaskView";
import { toObject } from "../../src/hooks/toObject";
import { Task } from "../../src/interfaces/Task";
import { taskService } from "../../src/services/task.service";

export default function TaskListPage({ task }: { task: Task }) {
  return (
    <Layout>
      <TaskView task={task}></TaskView>
    </Layout>
  );
}

export async function getServerSideProps(ctx: any) {
  const task = await taskService.getInfo(ctx.params.id);
  return {
    props: { tasks: toObject(task) },
  };
}
