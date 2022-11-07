import { Box } from "@chakra-ui/react";
import React from "react";
import { Task } from "../interfaces/Task";

export const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  console.log(tasks);
  return (
    <Box>
      {tasks.map((task) => (
        <div key={task._id}>{task._id}</div>
      ))}
    </Box>
  );
};
