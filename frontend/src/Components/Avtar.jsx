import React from "react";
import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";

export function AvatarWithRipple() {
  const size = "56px";
  const color = "purple";

  return (
    <Avatar
      size="full"
      position="absolute"
      top={0}
      borderRadius="50%"
      bg="#6D33A6"
    />
  );
}
