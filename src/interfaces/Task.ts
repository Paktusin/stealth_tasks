import { Status } from "@chakra-ui/react";
import { User } from "./User";

export interface Task {
  id: string;
  title: string;
  assignee: User;
  createdAt: number;
  updatedAt: number;
  status: Status;
  related: string[];
}
