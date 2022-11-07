import { Box, Button, Center, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import React, { useCallback } from "react";

export const LoginPage = () => {
  const onClick = useCallback(() => {
    signIn("google", {
      callbackUrl: "/",
    });
  }, []);
  return (
    <Center height={"100vh"}>
      <Box textAlign={"center"}>
        <Text m={8} fontSize={"3xl"}>
          Welcome to Task list
        </Text>
        <Button colorScheme={"blue"} onClick={onClick}>
          Sign in with Google
        </Button>
      </Box>
    </Center>
  );
};

export default LoginPage;
