import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex direction={"row"} justifyContent={"space-between"} pt={5}>
      <Flex gap={2} pb={2} justifyContent={"center"} alignContent={"center"}>
        <Avatar src={avatar} size={"xs"} />
        <Text as={"b"} fontWeight={"500"} fontSize={13}>
          {" "}
          {username}
        </Text>
        <Box fontSize={13}>·1w</Box>
      </Flex>
      <Text
        color={"blue.500"}
        as={"b"}
        fontWeight={"500"}
        fontSize={13}
        _hover={{ color: "white" }}
        transition={"0.2s ease-in-out"}
        cursor={"pointer"}
      >
        Unfollow
      </Text>
    </Flex>
  );
};
export default PostHeader;
