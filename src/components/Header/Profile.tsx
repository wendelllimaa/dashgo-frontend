import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
    align="center"     
  >
      <Box mr="4" textAlign="right">
        <Text>Name</Text>
        <Text color="gray.300" fontSize="small">name@email.com</Text>
      </Box>

      <Avatar size="md" name="name"/>
    </Flex>
  )
}