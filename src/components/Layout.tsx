import { Box, Progress } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { useRouterLoader } from "../hooks/useRouterLoader";
import { useUser } from "../hooks/useUser";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useUser();
  const loading = useRouterLoader();
  return (
    <Box height={"100vh"} display="flex" flexDirection={"column"}>
      {user && (
        <>
          <Navbar />
          {loading && <Progress size={"xs"} isIndeterminate />}
          <Box flex={"1 auto"} flexDirection={"column"} overflow="auto">
            {!loading && children}
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
};
