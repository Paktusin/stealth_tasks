import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useCallback, useRef, useState } from "react";
import { Task } from "../interfaces/Task";
import { Avatar } from "./Avatar";
import { Infinity } from "./Infinity";
import { Status } from "./Status";

export const TaskListItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <Box
      width={"100%"}
      cursor={"pointer"}
      display={"flex"}
      padding={2}
      shadow="base"
      gap={8}
      border={"1px"}
      borderColor="gray.200"
      borderRadius={8}
      p={4}
      alignItems={"center"}
    >
      <Avatar img={task.user?.image} />
      <Flex
        width={"1px"}
        flex={"1 auto"}
        flexDirection={"column"}
        overflow={"hidden"}
      >
        <Text
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          fontWeight={"bold"}
        >
          {task.title}
        </Text>
        <Text
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          color={"gray"}
        >
          {task.user?.name}
        </Text>
      </Flex>
      <Status status={task.status} />
      <ChevronRightIcon />
    </Box>
  );
};

export const TaskList: React.FC<{ tasks: Task[] }> = ({
  tasks: definedTasks,
}) => {
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
    <Infinity onEnd={loadMore}>
      <Stack maxWidth={720} spacing={4} width={"100%"}>
        {tasks.map((task) => (
          <TaskListItem key={task._id} task={task} />
        ))}
      </Stack>
    </Infinity>
  );
};
