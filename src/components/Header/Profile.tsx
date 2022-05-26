import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>
          Guilherme Victor
        </Text>
        <Text color="gray.300" fontSize="small">
          guivictorcontato@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Guilherme Victor" />
    </Flex>
  )
}