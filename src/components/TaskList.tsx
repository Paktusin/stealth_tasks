import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useDate } from "../hooks/useDate";
import { Task } from "../interfaces/Task";
import { Avatar } from "./Avatar";
import { Infinity } from "./Infinity";
import { Status } from "./Status";

export const TaskListItem: React.FC<{ task: Task }> = ({ task }) => {
  const date = useDate(task.createdAt);
  return (
    <Link href={"/view/" + task._id}>
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
            fontSize={"lg"}
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
            <b>{task.user?.name}</b> Creation date: {date}
          </Text>
        </Flex>
        <Status status={task.status} />
        <ChevronRightIcon />
      </Box>
    </Link>
  );
};

export const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <Stack maxWidth={720} spacing={4} width={"100%"}>
      {tasks.map((task) => (
        <TaskListItem key={task._id} task={task} />
      ))}
    </Stack>
  );
};
