import { Avatar, Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SuggestedUserHeader from "./SuggestedUserHeader";
import SuggestedUsersList from "./SuggestedUsersList";
const SuggestedUsers = () => {
  return (
    <Flex flexDir={"column"}>
      <SuggestedUserHeader />
      <SuggestedUsersList />
    </Flex>
  );
};
export default SuggestedUsers;
