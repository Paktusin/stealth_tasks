import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import React from "react";
import { useUser } from "../hooks/useUser";

export const Navbar = () => {
  const user = useUser();
  return (
    <Box boxShadow={"lg"} p={4}>
      <Flex gap={6} alignItems="center">
        <Menu>
          <MenuButton>
            <Avatar style={{ overflow: "hidden" }}>
              <img src={user.image!} referrerPolicy="no-referrer" />
            </Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
          </MenuList>
        </Menu>
        <Text fontSize={"2xl"}>{user.name}</Text>
      </Flex>
    </Box>
  );
};
