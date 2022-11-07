import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import React from "react";
import { useUser } from "../hooks/useUser";

const DesctopNav = () => {
  const user = useUser();

  return (
    <Flex gap={6} alignItems="end" height={"100%"}>
      <Flex alignItems="center" gap={6} height={"100%"} p={6}>
        <Menu>
          <MenuButton>
            <Avatar style={{ overflow: "hidden" }}>
              <img src={user?.image!} referrerPolicy="no-referrer" />
            </Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
          </MenuList>
        </Menu>
        <Text fontSize={"2xl"}>{user?.name}</Text>
      </Flex>
      <Tabs width={"100%"}>
        <TabList>
          <Tab>List</Tab>
          <Tab>Dashboard</Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
};

export const Navbar = () => {
  return (
    <Box boxShadow={"lg"} height={70}>
      <Show below="sm">Mobile menu</Show>
      <Show above="sm">
        <DesctopNav />
      </Show>
    </Box>
  );
};
