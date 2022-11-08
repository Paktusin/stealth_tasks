import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Task } from "../interfaces/Task";
import { Avatar } from "./Avatar";
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

export const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <Stack spacing={4} width={"100%"}>
      {tasks.map((task) => (
        <TaskListItem key={task._id} task={task} />
      ))}
    </Stack>
  );
};
