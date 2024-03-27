import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import userProfileStore from "../../store/userProfileStore";
import EditProfile from "./EditProfile";

const ProfileHeader = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const userProfile = userProfileStore((state) => state.userProfile);
  const user = useAuthStore((state) => state.user);
  const visitingOwnProfileAuth = user && userProfile.username == user.username;
  const visitingAnotherProfileAuth =
    user && userProfile.username != user.username;
  return (
    <Flex w={"full"} gap={10} mb={"80px"}>
      <VStack py={1} alignItems={"center"}>
        <Text
          fontWeight={700}
          display={{ base: "block", md: "none" }}
          fontSize={{ base: "xs", sm: "sm", md: "md" }}
        >
          {" "}
          {userProfile.username}
        </Text>
        <AvatarGroup
          size={{ base: "md", sm: "lg", md: "xl" }}
          display={"flex"}
          flexDir={"column"}
        >
          <Avatar src="/profilepic.png" />
        </AvatarGroup>
      </VStack>
      <VStack justifyContent={"flex-start"}>
        <Flex alignItems={"center"} gap={6} w={"full"}>
          <Text
            fontWeight={700}
            display={{ base: "none", md: "block" }}
            fontSize={{ base: "xs", sm: "sm", md: "md" }}
          >
            {" "}
            {userProfile.username}
          </Text>
          {visitingOwnProfileAuth ? (
            <Button
              size={{ base: "xs", sm: "sm" }}
              bg={"blue.500"}
              onClick={onOpen}
            >
              Edit Profile
            </Button>
          ) : null}
          {visitingAnotherProfileAuth ? (
            <Button size={{ base: "xs", sm: "sm" }} bg={"blue.500"}>
              Follow
            </Button>
          ) : null}
        </Flex>
        <Flex w={"full"} justifyContent={"flex-start"}>
          <Flex
            gap={1}
            mr={3}
            flexDir={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            {" "}
            <Text
              fontWeight={700}
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
            >
              {userProfile.posts.length}
            </Text>
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }}>Posts</Text>
          </Flex>
          <Flex
            gap={1}
            mx={3}
            flexDir={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <Text
              fontWeight={700}
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
            >
              {userProfile.followers.length}
            </Text>
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }}>Followers</Text>
          </Flex>
          <Flex
            gap={1}
            mx={3}
            flexDir={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <Text
              fontWeight={700}
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
            >
              {userProfile.following.length}
            </Text>
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }}>Following</Text>
          </Flex>
        </Flex>
        <Box w={"full"}>
          <Text fontWeight={700} fontSize={{ base: "xs", sm: "sm", md: "md" }}>
            {userProfile.fullName}
          </Text>
        </Box>
        <Box w={"full"}>
          <Text fontWeight={300} fontSize={{ base: "xs", sm: "sm", md: "md" }}>
            {userProfile.bio}
          </Text>
        </Box>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};
export default ProfileHeader;
