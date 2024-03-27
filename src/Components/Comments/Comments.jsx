import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const Comments = ({ profilepic, username, text, createdAt }) => {
  return (
    <Flex gap={2} py={3} px={5} alignItems={"center"}>
      <Avatar src={profilepic} size={{ base: "xs", md: "sm" }} />
      <Box>
        <Flex gap={1}>
          <Text fontWeight={"bold"} fontSize={{ base: "9", md: "12" }}>
            {" "}
            {username}
          </Text>
          <Text fontSize={{ base: "9", md: "12" }}>{text}</Text>
        </Flex>
        <Text fontSize={{ base: "7", md: "10" }}>{createdAt}</Text>
      </Box>
    </Flex>
  );
};
export default Comments;
