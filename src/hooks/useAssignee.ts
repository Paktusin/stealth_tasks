import { User } from "next-auth";
import { useEffect, useState } from "react";
import { Task } from "../interfaces/Task";

export function useAssignee(task: Task) {
  useEffect(() => {
    if (task.assignee) {
    }
  }, [task]);
  return null;
}
