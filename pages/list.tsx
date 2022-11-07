import React from "react";
import { Layout } from "../src/components/Layout";
import { TaskList } from "../src/components/TaskList";
import { Task } from "../src/interfaces/Task";
import { taskService } from "../src/services/task.service";

export default function TaskListPage({ tasks }: { tasks: Task[] }) {
  return (
    <Layout>
      <TaskList tasks={tasks}></TaskList>
    </Layout>
  );
}

export async function getServerSideProps() {
  const tasks = await (await taskService.list({}, { limit: 10 })).toArray();
  return {
    props: { tasks: tasks.map((d) => ({ ...d, _id: d._id.toString() })) },
  };
}
