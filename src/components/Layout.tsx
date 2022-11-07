import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <Box height={"100vh"} display="flex" flexDirection={"column"}>
      <Navbar />
      <Box flex={"1 auto"} overflow="auto">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
