import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Tab,
  TabList,
  Tabs,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { link } from "fs";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMenuActiveLinks } from "../hooks/useMenuActiveLinks";
import { useUser } from "../hooks/useUser";

const DesctopNav = () => {
  const user = useUser();
  const links = useMenuActiveLinks();

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
      <Tabs defaultIndex={links.findIndex((l) => l.active)} width={"100%"}>
        <TabList>
          {links.map((link) => (
            <Link key={link.path} href={link.path}>
              <Tab>{link.name}</Tab>
            </Link>
          ))}
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
