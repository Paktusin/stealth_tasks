import { Box } from "@chakra-ui/react";
import React from "react";

export const Avatar: React.FC<{ img?: string }> = ({ img }) => {
  return (
    <Box
      shadow={"base"}
      borderRadius={4}
      width={16}
      height={16}
      borderStartRadius={8}
      overflow={"hidden"}
    >
      {img && <img src={img} referrerPolicy="no-referer" />}
    </Box>
  );
};
