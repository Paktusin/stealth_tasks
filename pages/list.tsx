import { Box, Center, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../src/components/Layout";
import { TaskList } from "../src/components/TaskList";
import { toObject } from "../src/hooks/toObject";
import { Task } from "../src/interfaces/Task";
import { taskService } from "../src/services/task.service";

export default function TaskListPage({ tasks }: { tasks: Task[] }) {
  return (
    <Layout>
      <Center>
        <TaskList tasks={tasks}></TaskList>
      </Center>
    </Layout>
  );
}

export async function getServerSideProps() {
  const tasks = await (await taskService.listWithusers()).toArray();
  return {
    props: { tasks: tasks.map(toObject) },
  };
}
