import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";

const UserSuggested = ({ name, img, followers }) => {
  return (
    <VStack w={"full"} pb={4}>
      <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={4} alignItems={"center"}>
          <Avatar size={"md"} src={img} />
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"sm"}>{name}</Text>
            <Text color={"grey"} fontSize={"xs"}>
              {followers} followers
            </Text>
          </VStack>
        </Flex>
        <Box>
          <Text color={"blue.300"}>Follow</Text>
        </Box>
      </Flex>
    </VStack>
  );
};
export default UserSuggested;
