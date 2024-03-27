import { Avatar, Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { Route, Link as RouterLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const SuggestedUserHeader = () => {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return null;
  }
  const { handleLogout, isLoggingOut, error } = useLogout();
  return (
    <Flex
      w={"full"}
      maxW={"100vw"}
      gap={{ lg: "35px", xl: "75px" }}
      alignItems={"center"}
      display={{ base: "none", lg: "flex" }}
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"}>
        <Link
          as={RouterLink}
          to={`${user.username}`}
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Flex alignItems={"center"} gap={3}>
            <Avatar src={user.profilePicURL} size={"lg"} />
            <Text fontWeight={700} fontSize={"medium"}>
              {"  "} {user.username}
            </Text>
          </Flex>
        </Link>
      </Flex>
      <Link
        onClick={handleLogout}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
      >
        Logout
      </Link>
    </Flex>
  );
};
export default SuggestedUserHeader;
