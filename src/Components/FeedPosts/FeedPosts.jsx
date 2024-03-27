import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import {
  Flex,
  VStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Container,
} from "@chakra-ui/react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container py={8} px={7} justifyContent={"flex-start"} display={"grid"}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack
            key={idx}
            mb={20}
            pb={5}
            left={0}
            justifySelf={"flex-start"}
            alignItems={"flex-start"}
          >
            <Flex
              gap={3}
              alignItems={"center"}
              left={0}
              justifyContent={"flex-start"}
              justifySelf={"flex-start"}
            >
              <SkeletonCircle size="6" />
              <Skeleton height="10px" width="100px" />
            </Flex>
            <Skeleton height="500px" width="400px" />
            <Skeleton height="10px" width="50px" />
            <Skeleton height="10px" width="100px" />
            <Skeleton height="10px" width="140px" />
            <Skeleton height="15px" width="400px" />
          </VStack>
        ))}
      <FeedPost username="leipzig" img="/img1.png" avatar="/img1.png" />
      <FeedPost username="salsburg" img="/img2.png" avatar="/img2.png" />
      <FeedPost username="leipzig" img="/img1.png" avatar="/img1.png" />
      <FeedPost username="leipzig" img="/img2.png" avatar="/img2.png" />
      <FeedPost username="leipzig" img="/img1.png" avatar="/img1.png" />
    </Container>
  );
};
export default FeedPosts;
