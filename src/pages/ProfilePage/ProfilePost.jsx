import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import Comments from "../../Components/Comments/Comments";
import { useState } from "react";
import PostFooter from "../../Components/FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
      <GridItem
        w={"full"}
        border={"1px solid"}
        borderRadius={4}
        cursor={"pointer"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg={"blackAlpha.700"}
          transition={"0.2s ease-in-out"}
        >
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            w={"full"}
          >
            <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
              <FaHeart />0{" "}
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
              <FaComment />0
            </Flex>
          </Flex>
        </Flex>
        <Image src={img} w={"full"} h={"full"} />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "lg", md: "3xl", lg: "4xl" }}
        isCentered="true"
      >
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} w={"full"}>
            <Flex w={"full"} mx={"auto"} gap={3}>
              <Box w={{ base: "600px", md: "400px" }}>
                <Image src="/img1.png" borderRadius={2} />
              </Box>

              <Flex
                display={{ base: "none", md: "block" }}
                position={"relative"}
                flexDir={"column"}
                justifyContent={"flex-start"}
                flex={1}
                px={5}
                maxW={"400px"}
                w={"full"}
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  w={"full"}
                >
                  <Flex alignItems={"center"} top={0} mb={3} w={"full"}>
                    <Avatar src="/profilepic.png" size={"sm"} />
                    <Text fontWeight={"bold"} fontSize={"12"}>
                      lendanieo
                    </Text>
                  </Flex>
                  <Box mb={3}>
                    {" "}
                    <MdDelete />
                  </Box>
                </Flex>
                <Divider />
                <VStack
                  overflowY={"auto"}
                  maxH={{ base: "180px", md: "330px" }}
                  alignItems={"self-start"}
                >
                  <Comments
                    createdAt="1d ago"
                    username={"abrahmo"}
                    profilepic={"/av1.jpg"}
                    text={"Nice Pic"}
                  />

                  <Comments
                    createdAt="1d ago"
                    username={"abrahmo"}
                    profilepic={"/av4.jpg"}
                    text={"Nice Pic"}
                  />
                  <Comments
                    createdAt="1d ago"
                    username={"abrahmo"}
                    profilepic={"/av4.jpg"}
                    text={"Nice Pic"}
                  />
                  <Comments
                    createdAt="1d ago"
                    username={"abrahmo"}
                    profilepic={"/av4.jpg"}
                    text={"Nice Pic"}
                  />
                  <Comments
                    createdAt="1d ago"
                    username={"abrahmo"}
                    profilepic={"/av4.jpg"}
                    text={"Nice Pic"}
                  />
                  <Comments
                    createdAt="1d ago"
                    username={"abrahmo"}
                    profilepic={"/av4.jpg"}
                    text={"Nice Pic"}
                  />
                </VStack>
                <Flex
                  flexDir={"column"}
                  position={"absolute"}
                  bottom={"0"}
                  gap={1}
                  w={"full"}
                >
                  <PostFooter isProfilePage={true} />
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter bg={"black"}></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProfilePost;
