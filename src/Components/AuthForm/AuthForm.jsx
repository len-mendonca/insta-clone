import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  WrapItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import SingUp from "./SingUp";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} padding={4} borderRadius={"4px"}>
        <VStack spacing={5}>
          <Image src="/logo.png" h={"5rem"} />

          {isLogin ? <Login /> : <SingUp />}

          <Flex
            gap={3}
            alignItems={"center"}
            justifyContent={"center"}
            h={"1px"}
            w={"full"}
          >
            <Box border={"1px solid gray "} flex={2} />
            <Text>OR</Text>
            <Box border={"1px solid gray "} flex={2} h={"1px"} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} padding={6} borderRadius={"4px"}>
        {isLogin ? (
          <Text fontSize={14} textAlign={"center"}>
            Dont have an account?{" "}
            <a
              href="#"
              style={{ color: "#87CEEB" }}
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Sign Up
            </a>
          </Text>
        ) : (
          <Text fontSize={14} textAlign={"center"}>
            Already have an account?{" "}
            <a
              href="#"
              style={{ color: "#87CEEB" }}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Log In
            </a>
          </Text>
        )}
      </Box>
    </>
  );
};
export default AuthForm;
