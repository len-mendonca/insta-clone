import { Flex, Image } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <>
      <Flex gap={2} marginTop={6} alignItems={"center"}>
        <Image src="/googlelogo.png" h={"20px"} />
        <a href="google.com" style={{ color: "#87CEEB" }}>
          Log in with Google
        </a>
      </Flex>
    </>
  );
};
export default GoogleAuth;
