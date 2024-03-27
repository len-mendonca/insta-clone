import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import { useState } from "react";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(true);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <Flex
      direction={"column"}
      pt={2}
      fontWeight={600}
      fontSize={14}
      mb={isProfilePage ? null : "10"}
    >
      <Flex gap={2}>
        <Box onClick={handleLike} cursor={"pointer"}>
          {!liked ? <UnlikeLogo /> : <NotificationsLogo />}
        </Box>
        <Box cursor={"pointer"}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text pt={2}>{likes} likes</Text>
      <Text fontWeight={400}>
        <span style={{ fontWeight: "700" }}> {username}</span> Feeling good
      </Text>
      {isProfilePage ? null : (
        <Text color={"grey"} pt={1}>
          View all 1000 comments
        </Text>
      )}
      <InputGroup>
        <Input variant="flushed" placeholder="Write a comment" />
        <InputRightElement>
          <Button
            color={"blue.700"}
            _hover={{ color: "white" }}
            bg={"transparent"}
          >
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
export default PostFooter;
