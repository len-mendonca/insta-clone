import { Flex, Text } from "@chakra-ui/react";
import { BsGrid3X3 } from "react-icons/bs";

import { BsBookmark } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
const ProfileTabs = () => {
  return (
    <Flex justifyContent={"center"} gap={10}>
      <Flex alignItems={"center"} gap={2} borderTop={"2px solid white"} pt={2}>
        <BsGrid3X3 fontSize={"25px"} />
        <Text
          fontSize={{ base: "10px", md: "12px" }}
          fontWeight={700}
          display={{ base: "none", md: "block" }}
        >
          {" "}
          POSTS
        </Text>
      </Flex>
      <Flex alignItems={"center"} gap={2} pt={2}>
        <BsBookmark fontSize={"25px"} />
        <Text
          fontSize={{ base: "10px", md: "12px" }}
          fontWeight={700}
          display={{ base: "none", md: "block" }}
        >
          {" "}
          SAVED
        </Text>
      </Flex>
      <Flex alignItems={"center"} gap={2} pt={2}>
        <FiHeart fontSize={"25px"} />
        <Text
          fontSize={{ base: "10px", md: "12px" }}
          fontWeight={700}
          display={{ base: "none", md: "block" }}
        >
          {" "}
          LIKES
        </Text>
      </Flex>
    </Flex>
  );
};
export default ProfileTabs;
