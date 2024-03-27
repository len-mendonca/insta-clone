import { Box, Container, Text } from "@chakra-ui/react";
import FeedPosts from "../../Components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../Components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container
      style={{ boxSizing: "border-box" }}
      pt={"30px"}
      display={"flex"}
      ml={{ base: 0, lg: "40px" }}
      mr={{ base: "20px" }}
      gap={{ base: "none", lg: "90px" }}
      maxW={{
        sm: "container.base",
        md: "container.sm",
        lg: "container.lg",
      }}
    >
      <Box flex={2} py={0} justifyContent={"center"}>
        <FeedPosts />
      </Box>
      <Box
        flex={3}
        mr={"60px"}
        maxW={"300px"}
        display={{ base: "none", lg: "block" }}
        justifySelf={"self-end"}
      >
        <SuggestedUsers />
      </Box>
    </Container>
  );
};
export default HomePage;
