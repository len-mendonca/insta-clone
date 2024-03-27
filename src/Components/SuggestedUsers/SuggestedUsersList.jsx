import { Box, Flex, Text } from "@chakra-ui/react";
import UserSuggested from "./UserSuggested";

const SuggestedUsersList = () => {
  return (
    <Flex maxW={"full"} style={{ boxSizing: "border-box" }} flexDir={"column"}>
      <Flex w={"full"} flexDir={"row"} justifyContent={"space-between"} py={4}>
        <Text fontSize={"sm"} fontWeight={600} color={"grey"}>
          Suggested for you{" "}
        </Text>

        <Text fontSize={"xs"} fontWeight={600}>
          See All{" "}
        </Text>
      </Flex>
      <UserSuggested
        name={"Juan Abraham"}
        img={"/av1.jpg"}
        followers={"1392"}
      />
      <UserSuggested name={"Edgar Scand"} img={"/av2.jpg"} followers={"480"} />
      <UserSuggested name={"Clod Ern"} img={"/av3.jpg"} followers={"762"} />
    </Flex>
  );
};
export default SuggestedUsersList;
