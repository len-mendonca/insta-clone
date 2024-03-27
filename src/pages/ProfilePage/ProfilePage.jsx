import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";
import { useLocation, useParams } from "react-router-dom";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);
  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;
  return (
    <VStack w={"full"} py={"50px"} justifyContent={"center"}>
      Hi
      <Container maxW={"full"} justifySelf={"self-start"}>
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Container>
      <Container
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        maxW={"full"}
      >
        <ProfileTabs />
      </Container>
      <Container maxW={"full"}>
        <ProfilePosts />
      </Container>
    </VStack>
  );
};
export default ProfilePage;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size={"24"} />
      <Flex
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
      >
        <Skeleton height={"12px"} width={"150px"} />
        <Skeleton height={"12px"} width={"150px"} />
      </Flex>
    </Flex>
  );
};
const UserNotFound = () => {
  return (
    <Flex flexDir={"column"} textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go Home
      </Link>
    </Flex>
  );
};
