import { Center } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { Infinity } from "../src/components/Infinity";
import { Layout } from "../src/components/Layout";
import { TaskList } from "../src/components/TaskList";
import { toObject } from "../src/hooks/toObject";
import { Task } from "../src/interfaces/Task";
import { taskService } from "../src/services/task.service";

export default function TaskListPage({
  tasks: definedTasks,
}: {
  tasks: Task[];
}) {
  const size = 10;
  const [page, setPage] = useState(0);
  const [tasks, setTasks] = useState<Task[]>(definedTasks || []);
  const loadMore = useCallback(() => {
    const newPage = page + 1;
    fetch(`/api/task?skip=${newPage * size}&limit=${size}`)
      .then((res) => res.json())
      .then((res) => {
        if (newPage) {
          setTasks((tasks) => tasks.concat(res));
        } else {
          setTasks(res);
        }
        setPage(newPage);
      });
  }, [page]);
  return (
    <Layout>
      <Infinity onEnd={loadMore}>
        <Center paddingY={8}>
          <TaskList tasks={tasks}></TaskList>
        </Center>
      </Infinity>
    </Layout>
  );
}

export async function getServerSideProps() {
  const tasks = await (
    await taskService.listWithusers([{ $limit: 10 }])
  ).toArray();
  return {
    props: { tasks: tasks.map(toObject) },
  };
}
