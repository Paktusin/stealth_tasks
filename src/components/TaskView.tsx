import {
  Box,
  Center,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDate } from "../hooks/useDate";
import { Task } from "../interfaces/Task";
import { Avatar } from "./Avatar";
import { Status } from "./Status";
import { TaskList } from "./TaskList";

export const TaskView: React.FC<{ task: Task; related?: Task[] }> = ({
  task,
  related,
}) => {
  const date = useDate(task.createdAt);
  return (
    <Box>
      <Box shadow={"base"} padding={8} display={"flex"} gap={8}>
        <Avatar img={task.user?.image}></Avatar>
        <Box>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {task.title}
          </Text>
          <Text color={"gray"}>{date}</Text>
        </Box>
      </Box>
      <Grid
        rowGap={8}
        templateColumns={{ md: "repeat(3, auto)", base: "repeat(1, auto)" }}
        padding={8}
      >
        <GridItem colSpan={1}>
          <Text>Status</Text>
          <Status status={task.status} />
        </GridItem>
        <GridItem colSpan={1}>
          <Text>Date Created</Text>
          <Status status={date} />
        </GridItem>
        <GridItem colSpan={1}>
          <Text>Assignee</Text>
          <Status status={task.assignee || "Unansigned"} />
        </GridItem>
        <GridItem colSpan={{ md: 3, base: 1 }}>
          <Text>Description</Text>
          <Box
            padding={4}
            overflow={"auto"}
            borderRadius={8}
            backgroundColor={"gray.300"}
            height={150}
          >
            {task.description}
          </Box>
        </GridItem>
      </Grid>
      <Tabs>
        <TabList paddingX={8}>
          <Tab>Related tasks</Tab>
          <Tab isDisabled>Wathers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Center>{related && <TaskList tasks={related}></TaskList>}</Center>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
