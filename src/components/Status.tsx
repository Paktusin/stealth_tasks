import { Box, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";

const map: Record<string, string> = {
  active: "blue.500",
  new: "gray.400",
  closed: "green.500",
  resolved: "orange.500",
};

export const Status: React.FC<{ status: string }> = ({ status }) => {
  const backColor = useMemo(() => map[status] || "gray.400", [status]);
  return (
    <Box
      width={"fit-content"}
      paddingX={4}
      paddingY={1}
      borderRadius={8}
      backgroundColor={backColor}
      color={"white"}
    >
      <Text fontWeight={"bold"}>{status}</Text>
    </Box>
  );
};
