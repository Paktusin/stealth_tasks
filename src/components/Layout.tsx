import { Box, Progress } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { useUser } from "../hooks/useUser";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useUser();
  return (
    <Box height={"100vh"} display="flex" flexDirection={"column"}>
      {user && (
        <>
          <Navbar />
          <Box flex={"1 auto"} overflow="auto">
            {children}
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
};
