import { Status } from "@chakra-ui/react";
import { User } from "./User";

export interface Task {
  _id: string;
  title: string;
  assignee: User;
  createdAt: number;
  updatedAt?: number;
  status: string;
  related: string[];
}
