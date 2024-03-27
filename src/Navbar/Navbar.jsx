import { Box, Button, Divider, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex mt={3} justifyContent={"space-around"} alignItems={"center"}>
        <Box>
          <Image src="/logo.png" h={"59"} w={"103"} />
        </Box>
        <Flex alignItems={"center"} gap={3}>
          <Button bg={"blue.500"} onClick="/auth">
            {" "}
            Log in
          </Button>
          <Link
            style={{ textDecoration: "none" }}
            to="/auth"
            as={RouterLink}
            color={"blue.300"}
            _hover={{ color: "white" }}
          >
            {" "}
            Sign Up{" "}
          </Link>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};
export default Navbar;
